from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse, JsonResponse
import requests
from django.conf import settings
import json
from captcha.image import ImageCaptcha
from django.contrib import messages
import datetime
from django.template.loader import render_to_string
from functools import wraps
from datetime import date
from collections import defaultdict
from django.views.decorators.csrf import csrf_exempt
import ast
from django.contrib import messages #import messages
from .models import *
# Create your views here.

CONST = 879


def bsf_login_required(f):
    @wraps(f)
    def decorated_function(request, *args, **kwargs):
        if not request.COOKIES.get("user_name"):
            return redirect(reverse("signin"))
        return f(request, *args, **kwargs)
    return decorated_function


def login_view(request):
    response = render(request, "login_page.html")
    response.delete_cookie('user_name')
    return response


def logout(request):
    return redirect("login_view")


def captche_image(request, captch):
    otp = str(int(captch) // CONST)
    # import pdb; pdb.set_trace()
    image_captcha = ImageCaptcha()
    image = image_captcha.generate_image(otp)
    response = HttpResponse(content_type='image/jpeg')
    image.save(response, "JPEG")
    return response


def signin_view(request):
    if request.method == "GET":
        otp_response = requests.get(settings.OTP)
        if otp_response.status_code == 200:
            otp = str(int(otp_response.content) * CONST)
        else:
            otp = str(123 * CONST)
        return render(request, "sign_in.html", {"otp": otp, "captcha_otp": int(otp) // CONST})
    user_name = request.POST.get("user_name")
    password = request.POST.get("password")
    captcha = request.POST.get("captcha")
    data = {
        "UserID": user_name,
        "Password": password,
        # "Passcode": captcha
    }
    captcha_key = request.POST.get("captcha_key")
    if int(captcha) == int(captcha_key) // CONST:
        result = requests.post(settings.AUTH,
                               json=data)
        if result.status_code == 200:
            if json.loads(result.content).get("IsAuthenticated") == "Authenticated":
                # import pdb; pdb.set_trace()
                profile_api_response = requests.get(
                    (settings.USER_PROFILE).format(user_id=user_name))
                if profile_api_response.status_code == 200:
                    user_profile = json.loads(profile_api_response.content)
                else:
                    user_profile = {}

                if user_name in settings.ADMIN_USERS:
                    response = redirect("admin_view")
                else:
                    response = redirect("rules")
                response.set_cookie("user_name", user_name)
                response.set_cookie("userprofile_name",
                                    user_profile.get("UserName"))
                response.set_cookie(
                    "user_coins", user_profile.get("Total_Coins"))
                
                return response
            return render(request, "sign_in.html", {"error": "UserID or Password is incorrect", "otp": captcha_key, "captcha_otp": int(captcha_key) // CONST})
        return render(request, "sign_in.html", {"error": "Authentication Failed", "otp": captcha_key, "captcha_otp": int(captcha_key) // CONST})
    return render(request, "sign_in.html", {"error": "invalid captcha", "otp": captcha_key, "captcha_otp": int(captcha_key) // CONST})


@bsf_login_required
def rules(request):
    request.COOKIES.get("user_name")
    user_name = request.COOKIES.get("user_name")
    if user_name in settings.ADMIN_USERS:
        return redirect(reverse("admin_view"))
    return render(
        request, "rules.html",
        {"current_page": "rules", "user_name": user_name})


@bsf_login_required
def home(request):
    return render(request, "home.html")


@bsf_login_required
def schedule(request):
    return render(request, "schedule.html")


@bsf_login_required
def ledger(request):
    user_played_matches_list = []
    user_name = request.COOKIES.get("user_name")
    response = requests.get((settings.USERPLAYED_LIST).format(userid=user_name))
    if response.status_code == 200:
        user_played_matches_list = json.loads(response.content)
        specific_list = []
        # user_played_matches_list = [list(x) for x in set(tuple(x) for x in user_played_matches_list)]
        for each in user_played_matches_list:
            specific_list.append([each[0], each[5], each[7]])
        user_played_matches_list = [list(x) for x in set(tuple(x) for x in specific_list)]
    return render(
        request, "ledger.html",
        {"current_page": "ledger",
         "user_played_matches_list": user_played_matches_list})


@bsf_login_required
def ledger_team(request, ledger_id):
    # import pdb; pdb.set_trace()
    user_name = request.COOKIES.get("user_name")
    response = requests.get((settings.MARKET_BET_DETAILS).format(userid=user_name, market_id=ledger_id))
    if response.status_code == 200:
        bet_details_list = json.loads(response.content)
        lagai_khai_list = [x for x in bet_details_list if x.get("market_type").upper() == 'LAGAI' or x.get("market_type").upper() == 'KHAI']
        yes_no_list = [x for x in bet_details_list if 'YES' in x.get("market_type").upper()  or 'NO' in x.get("market_type").upper()]
        return render(
            request, "team.html",
            {"bet_details_list": bet_details_list,
             "lagai_khai_list": lagai_khai_list,
             "yes_no_list": yes_no_list})
    return render(
        request, "team.html",
        {"bet_details_list": [],
         "lagai_khai_list": [],
         "yes_no_list": []})


@bsf_login_required
@csrf_exempt
def change_password(request):
    if request.method == "POST":
        user_name = request.COOKIES.get("user_name")
        old_password = request.POST.get("password")
        new_password = request.POST.get("new_password")
        password_confirmation = request.POST.get("password_confirmation")

        otp_response = requests.get(settings.OTP)
        if otp_response.status_code == 200:
            otp = int(otp_response.content)
        else:
            otp = 123
        data = {
            "UserID": user_name,
            "Password": old_password,
            "Passcode": otp
        }
        if new_password == password_confirmation:
            if len(new_password) >= 6:
                result = requests.post(settings.AUTH,
                               json=data)
                if result.status_code == 200:
                    if json.loads(result.content).get("IsAuthenticated") == "Authenticated":

                        data = {
                            "UserID":user_name,
                            "Password":new_password
                        }
                        result = requests.post(settings.PASSWORD_RESET,
                               json=data)

                        if result.status_code == 200:
                            if  json.loads(result.content).get("IsPasswordReset") == "done":
                                return JsonResponse(
                                    {"status": "success",
                                     "message": "Password changed Successfully."})

                    return JsonResponse(
                        {"status": "fail",
                         "message": "Please Enter Valid Old Password"})
            return JsonResponse(
                {"status": "fail",
                 "message": "Password Length Should be minimum 6"})
        return JsonResponse(
            {"status": "fail",
             "message": "Please Enter Same New Password"})

    return render(
        request, "password.html",
        {"current_page": "change_password"})


@bsf_login_required
def upcoming(request):
    if request.method == "GET":
        # import pdb; pdb.set_trace()
        response = requests.get(settings.UPCOMING)
        if response.status_code == 200:
            match_list = json.loads(response.content)
            return render(
                request, "upcoming.html",
                {"match_list": match_list,
                 "current_page": "upcoming"})
        return render(request, "upcoming.html", {"current_page": "upcoming"})



@bsf_login_required
def inplay(request):
    if request.method == "GET":
        # import pdb; pdb.set_trace()
        match_list = Match.objects.all()
        if len(match_list)!=0:
            return render(
                request, "inplay.html",
                {"match_list": match_list,
                 "current_page": "inplay"})
        return render(request, "inplay.html", {"current_page": "inplay"})


@bsf_login_required
def market_detail(request,match_id):
    bookset = False
    bookset_price = 0
    
    userId =  request.COOKIES['user_name']
    
    ins = Match.objects.filter(match_id= match_id).get()
    sessionData = BettingDetail.objects.filter(userId=userId,match=ins).order_by('bet_id')
    marketData = LaghaiKhaliBetDetail.objects.filter(userId=userId,match=ins).order_by('bet_id')
    if len(marketData) >=2:
        if marketData[0].team == marketData[1].team:
            bookset = True
            bookset_price = marketData[0].amount - marketData[1].amount
    
    market_id = match_id
    event_name = ins.match_name
    event_id = ins.match_id
    runner1,runner2  = event_name.split('Vs')
    
    # session_id = request.GET.get("seriesId")
    # section_id1 = request.GET.get("selectionId1")
    # section_id2 = request.GET.get("selectionId2")
    #market_name = request.GET.get("marketName")
    market_type = ins.match_type
    #api_response = requests.get((settings.SCORE_API).format(event_id=event_id))
    score = []
    data = {
        'match_id':match_id,
        'runner1':runner1,
        'runner2':runner2,
        'match_type':ins.match_type,
        'sessionData':sessionData,
        'marketData':marketData,
        'bookset' : bookset,
        'bookset_price':bookset_price
    }
    
    return render(request, "market.html",data)


@bsf_login_required
def tournament(request):
    return render(request, "tournament.html")


@bsf_login_required
def settings_view(request):
    return render(request, "settings.html")


@bsf_login_required
def games(request):
    return render(request, "games.html")


@bsf_login_required
def create_bet(request):
    # import pdb; pdb.set_trace()
    if request.method == "POST":
        market_name = request.POST.get("market_name")
        market_type = request.POST.get("market_type")
        market_rate = request.POST.get("market_rate")
        market_id = request.POST.get("market_id")
        bet_amount = request.POST.get("stack")
        actual_bet_amount = request.POST.get("stack")
        userid = request.COOKIES.get("user_name") or "newuser1"
        user_coins = request.COOKIES.get(
            "user_coins") or get_user_coins(userid)
        bet_date = date.today().strftime("%d-%m-%Y")
        event_name = request.POST.get("event_name")
        if market_type in ["KHAI"]:
            bet_amount = str(float(bet_amount) * float(market_rate))
        data = {
            "userid": userid,
            "market_id": market_id,
            "market_name": market_name,
            "market_type": market_type,
            "market_rate": market_rate,
            "bet_amount": bet_amount,
            "bet_date": bet_date,
            "versus": event_name,
        }
        print(data)
        # import pdb; pdb.set_trace()
        if actual_bet_amount:
            user_coins = int(float(user_coins))
            bet_coins = int(float(bet_amount))
            actual_bet_amount = int(float(actual_bet_amount))
            if actual_bet_amount > 499:
                if user_coins > actual_bet_amount:
                    result = requests.post(settings.CREATE_BET,
                                           json=data)
                    if result.status_code == 200:
                        if json.loads(result.content).get("IsBetDone") == "done":
                            # messages.success(request, "Created BET Successfully")
                            response = JsonResponse(
                                {"status": "success",
                                 "message": "BET Placed Successfully"})
                            user_coins = int(user_coins - bet_coins)
                            response.set_cookie("user_coins", user_coins)
                            return response
                    # messages.error(request, "Created BET Failed")
                    return JsonResponse(
                        {"status": "fail",
                         "message": "Created BET Failed"})
                return JsonResponse(
                    {"status": "fail",
                     "message": "You Don't have coins for place BET"})
            return JsonResponse(
                {"status": "fail",
                 "message": "500 is minimum amount for place BET"})
        return JsonResponse(
                {"status": "fail",
                 "message": "500 is minimum amount for place BET"})


@bsf_login_required
def get_play_data():
    match_list = []
    response = requests.get(settings.INPLAY)
    if response.status_code == 200:
        data_list = json.loads(response.content)
        # for row in data_list:
        #     data = {}
        #     data["eve"]


def get_least_market_data(cricket):
    runner1_back = cricket.get('runners')[0].get('back')[0].get('price')
    runner2_back = cricket.get('runners')[1].get('back')[0].get('price')
    runner1_lay = cricket.get('runners')[0].get('lay')[0].get('price')
    runner2_lay = cricket.get('runners')[1].get('lay')[0].get('price')
    if float(runner1_back) < float(runner2_back):
        cricket['runners'][1]['back'][0]['price'] = ''
    else:
        cricket['runners'][0]['back'][0]['price'] = ''
    if float(runner1_lay) < float(runner2_lay):
        cricket['runners'][1]['lay'][0]['price'] = ''
    else:
        cricket['runners'][0]['lay'][0]['price'] = ''
    return cricket


def api_score(score_data):
    # event_id = request.GET.get("event_id")
    data = []
    if score_data:
        home_score = score_data[0].get("score").get("home")
        away_score = score_data[0].get("score").get("away")
        if home_score.get("highlight"):
            score = home_score.get("inning1")
            score1 = away_score.get("inning1")
            if score:
                score["name"] = home_score.get("name")
                data.append(score)
            else:
                data.append({"name": home_score.get("name")})
            if score1:
                score1["name"] = away_score.get("name")
                data.append(score1)
            else:
                data.append({"name": away_score.get("name")})
        elif away_score.get("highlight"):
            score = away_score.get("inning1")
            if score:
                score["name"] = away_score.get("name")
                score1 = home_score.get("inning1")
                data.append(score)
            else:
                data.append({"name": away_score.get("name")})
            if score1:
                score1["name"] = home_score.get("name")
                data.append(score1)
            else:
                data.append({"name": home_score.get("name")})
        print(data)
        return data
    return data


def get_ball_status(score):
    ball_status = score[0].get("stateOfBall")
    if ball_status:
        if ball_status.get("batsmanRuns") != "0":
            return ball_status.get("batsmanRuns")
        elif ball_status.get("wide") != "0":
            return "wide"
        elif ball_status.get("bye") != "0":
            return "bye"
        elif ball_status.get("legBye") != "0":
            return "legBye"
        elif ball_status.get("noBall") != "0":
            return "noBall"
        elif ball_status.get("dismissalTypeName") != "Not Out":
            return "Out"
        return ""
    return ""


@bsf_login_required
def update_market(request):
    # event_id = request.GET.get("id")
    market_id = request.GET.get("marketId")
    event_name = request.GET.get("eventName")
    event_id = request.GET.get("eventId")
    runner1 = request.GET.get("runnerName1")
    runner2 = request.GET.get("runnerName2")
    # session_id = request.GET.get("seriesId")
    # section_id1 = request.GET.get("selectionId1")
    # section_id2 = request.GET.get("selectionId2")
    market_name = request.GET.get("marketName")
    market_type = request.GET.get("marketType")
    api_response = requests.get((settings.SCORE_API).format(event_id=event_id))
    score = []
    ball_status = ""
    # import pdb; pdb.set_trace()
    if api_response.status_code == 200:
        score_data = json.loads(api_response.content)
        if score_data:
            score = api_score(score_data)
            ball_status = get_ball_status(score_data)
    response = requests.get(
        (settings.ODDS_SESSION.format(market_id=market_id)))
    if response.status_code == 200:
        market_data = json.loads(response.content)
        if market_data:
            if market_data['cricket']:
                market_data['cricket'][0] = get_least_market_data(
                    market_data['cricket'][0])
            html = render_to_string(
                'update_market.html',
                {"market_data": market_data,
                 "event_name": event_name,
                 "runner1": runner1,
                 "runner2": runner2,
                 "event_id": event_id,
                 # "session_id": session_id,
                 # "section_id1": section_id1,
                 # "section_id2": section_id2,
                 "market_name": market_name,
                 "market_type": market_type,
                 "market_id": market_id,
                 "score": score,
                 "ball_status": ball_status
                 })
            return HttpResponse(html)
        return redirect("inplay")
    html = render_to_string('update_market.html')
    return HttpResponse(html)


def set_cookie(response, key, value,):
    max_age = 60 * 60  # one hour
    expires = datetime.datetime.strftime(datetime.datetime.utcnow(
    ) + datetime.timedelta(seconds=max_age), "%a, %d-%b-%Y %H:%M:%S GMT")
    response.set_cookie(key, value, max_age=max_age, expires=expires)


def get_user_coins(userid):
    profile_api_response = requests.get(
        (settings.USER_PROFILE).format(user_id=userid))
    if profile_api_response.status_code == 200:
        user_profile = json.loads(profile_api_response.content)
        return user_profile.get("Total_Coins")
    return 0


def get_bet_details(url):
    response = requests.get(url)
    if response.status_code == 200:
        data = json.loads(response.content)
        tmp = defaultdict(list)
        for item in data:
            tmp[item['versus'], item["bet_date"]].append(
                [item['bet_amount'], item['market_name']])

        return temp


@bsf_login_required
def teen_patti_t20(request):
    response = requests.get(settings.TEEN_PATTI_T20)
    if response.status_code == 200:
        data = json.loads(response.content)
        # import pdb; pdb.set_trace()
        result = data.get("result")[0]
    return render(request, "teen_patti_t20.html", {"data": result})


# @bsf_login_required
# def get_teen_patti_t20_da():
#     response = requests.get(settings.TEEN_PATTI_T20)
#     if response.status_code == 200:
#         data = json.loads(response.content)


def admin_view(request):
    user_name = request.COOKIES.get("user_name")
    if user_name in settings.ADMIN_USERS:
        lagai_khai_list = LaghaiKhaliBetDetail.objects.all().order_by('bet_id')
        yes_no_list = BettingDetail.objects.all().order_by(('bet_id'))
        return render(request,
                        "admin.html",
                        {"lagai_khai_list": lagai_khai_list,
                         "yes_no_list": yes_no_list})

    return redirect(reverse("rules"))


@csrf_exempt
def update_bet_records(request):
    market_id = request.POST.get("id")
    status = request.POST.get("status")
    
    try:
        if status == 'won':
            ins = LaghaiKhaliBetDetail.objects.get(pk=int(market_id))
            ins.comp = 'T'
            
        elif status in ['yes' ,'no']:
            ins =  BettingDetail.objects.get(pk=int(market_id))
            ins.comp = 'T'
            
        ins.save()
        
        return JsonResponse(
            {"status": "success",
                "message": "Update Successfully"})
    
    except Exception as e:    
        return JsonResponse(
            {"status": "fail",
            "message": "Update Failed"})


def get_user_coins(request):
    user_name = request.COOKIES.get("user_name")
    profile_api_response = requests.get(
                    (settings.USER_PROFILE).format(user_id=user_name))
    if profile_api_response.status_code == 200:
        user_profile = json.loads(profile_api_response.content)
        response = JsonResponse(
            {"status": "success",
             "message": ""})
        user_coins = user_profile.get("Total_Coins")
        print(user_coins)
        response.set_cookie("user_coins", user_coins)
        return response

    return JsonResponse(
        {"status": "fail",
         "message": ""})


@csrf_exempt
def get_filter_bet_records(request):
    # import pdb; pdb.set_trace()
    date = request.POST.get("date")
    result = requests.post((settings.FILTER_BET_RECORDS).format(bet_date=date))
    if result.status_code == 200:
        data = json.loads(result.content)
        if data:
            lagai_khai_list = [x for x in data if x[1].upper() == 'LAGAI' or x[1].upper() == 'KHAI']
            yes_no_list = [x for x in data if 'YES' in x[1].upper() or 'NO' in x[1].upper()]
            if lagai_khai_list:
                market_html = render_to_string(
                    'market_tbody.html',
                    {"lagai_khai_list": lagai_khai_list})
            else:
                market_html = "<tr><td></td><td></td><td><h3>No Date Found!</td></h3></tr>"
            if  yes_no_list:
                session_html = render_to_string(
                    'session_tbody.html',
                    {"yes_no_list": yes_no_list})
            else:
                session_html = "<tr><td></td><td></td><td><h3>No Date Found!</td></h3></tr>"
            return JsonResponse(
                {"status": "success",
                 "market_tbody": market_html,
                 "session_tbody": session_html,
                 "message": "Update Successfully"})

        return JsonResponse(
            {"status": "success",
             "market_tbody": "<tr><td></td><td></td><td><h3>No Date Found!</td></h3></tr>",
             "session_tbody": "<tr><td></td><td></td><td><h3>No Date Found!</td></h3></tr>",
             "message": "No Date Found"})

    return JsonResponse(
        {"status": "fail",
         "message": "Update Failed"})


@csrf_exempt
def get_update_score(request):
    event_id = request.GET.get("eventId")
    score = []
    ball_status = ""
    # import pdb; pdb.set_trace()
    api_response = requests.get((settings.SCORE_API).format(event_id=event_id))
    if api_response.status_code == 200:
        score_data = json.loads(api_response.content)
        if score_data:
            score = api_score(score_data)
            ball_status = get_ball_status(score_data)

    html = render_to_string(
        'update_score.html',
        {"score": score,
         "ball_status": ball_status
         })
    return HttpResponse(html)




@csrf_exempt
def saveNewMatchData(request):
    data = json.loads(request.POST['jData'])

    try:
        ins = Match.objects.filter(match_name=data['data']['Teams']).get()
        ins.match_id =data['data']['MatchId']
        ins.match_name = data['data']['Teams']
        ins.match_type = data['data']['MatchType']
        ins.match_starttime = data['data']['StartTime']
        ins.match_details = data
    except Exception as e: 
        ins = Match(
            match_id =data['data']['MatchId'],
            match_name = data['data']['Teams'],
            match_type = data['data']['MatchType'],
            match_starttime = data['data']['StartTime'],
            match_details = data
        )
    
    ins.save()
    return HttpResponse('')

@csrf_exempt
def saveMatchScore(request,match_id):
    score = request.POST['score']
    type = request.POST['type']
    jsonData = request.POST['json']
    jsonData = json.loads(jsonData)
    print("scorin data")
    match = Match.objects.filter(match_id=match_id).get()
    if type == 'OTHER':
        
        over_balls = jsonData['data']['Over'].split("/")[0]
        
        try:
            over,ball = over_balls.split(".")
            over,ball =  int(over),int(ball)
        except :
            over = int(over_balls)
            ball = 0
        
        try:
            ins = Match_Score.objects.filter(match=match,over=over,ball=ball).get()
            if ins.runner == jsonData['data']['Name']:
                return HttpResponse('')
            else:
                run_wickets = jsonData['data']['Score']
                run,wicket = run_wickets.split("/")
                run,wicket = int(run) ,int(wicket)
                runner = jsonData['data']['Name']
                filedDetails = jsonData['data']['OnFiledDetail']
                p1,p2 = filedDetails.split(",")
                if '*' in p1:
                    player,player_Curr_Run = p1.split(" ")
                    player_Curr_Run = int(player_Curr_Run[:-1])
                else:
                    _,player,player_Curr_Run = p2.split(" ")
                    player_Curr_Run = int(player_Curr_Run[:-1])
                    
                
                m_ins = Match_Score(
                    match=match,
                    ining = 2,
                    over=over,
                    ball=ball,
                    run=run,
                    wickets=wicket,
                    runner= runner,
                    player= player,
                    player_Curr_Run=player_Curr_Run,
                    score_Json=jsonData
                )  
        except :
            run_wickets = jsonData['data']['Score']
            run,wicket = run_wickets.split("/")
            run,wicket = int(run) ,int(wicket)
            runner = jsonData['data']['Name']
            filedDetails = jsonData['data']['OnFiledDetail']
            p1,p2 = filedDetails.split(",")
            if '*' in p1:
                player,player_Curr_Run = p1.split(" ")
                player_Curr_Run = int(player_Curr_Run[:-1])
            else:
                _,player,player_Curr_Run = p2.split(" ")
                player_Curr_Run = int(player_Curr_Run[:-1])
                
            
            m_ins = Match_Score(
                match=match,
                ining = 1,
                over=over,
                ball=ball,
                run=run,
                wickets=wicket,
                runner= runner,
                player= player,
                player_Curr_Run=player_Curr_Run,
                score_Json=jsonData
            )
            
            m_ins.save()
            print(m_ins)

    return HttpResponse('')    

@csrf_exempt
def saveBettingDetails(request,match_id):
    userId = request.POST['userId']
    session = request.POST['session']
    sessionRate = request.POST['sessionRate']
    betCurrCoins = request.POST['betCurrCoins']
    totalRate = request.POST['totalRate']
    
    sessionVal =  float(sessionRate.split("/")[0])
    sessionR =  float(sessionRate.split("/")[1].split("(")[0])
    mode  = sessionRate.split("(")[1][:-1]
    #print(userId,session,sessionRate,betCurrCoins,totalRate)
    
    bet_ins = BettingDetail(
        userId = userId,
        match = Match.objects.filter(match_id=match_id).get(),
        session = session,
        mode = mode,
        sessionVal = int(sessionVal),
        sessionRate = sessionR,
        betcoin = round(float(betCurrCoins),2),
        totalrate = round(float(totalRate),2),
        date = date.today(),
        comp = 'F'
        
    )
    
    bet_ins.save()
    leftcoins = float(betCurrCoins) - float(totalRate)
    try:
        uCoin_ins = UserCoins.objects.filter(userId=userId).get()
        uCoin_ins.coins = leftcoins
    except:
        uCoin_ins = UserCoins(
            userId= userId,
            coins = leftcoins
        )
    
    uCoin_ins.save()
    reData = str(leftcoins)+"_"+str(session)+"_"+str(sessionR)+"_"+str(totalRate)+"_"+str(int(sessionVal))+"_"+str(mode)
    
    return HttpResponse(reData)


@csrf_exempt
def saveLaghaiKhaiDetails(request,match_id):
    userId = request.POST['userId']
    market = request.POST['market']
    marketRate = request.POST['marketRate']
    betCurrCoins = request.POST['betCurrCoins']
    totalRate = request.POST['totalRate']
    
    rate = float(marketRate.split("(")[0])
    mode = marketRate.split("(")[1][:-1]
    #print(userId,market,marketRate,betCurrCoins,totalRate)
    
    bet_ins = LaghaiKhaliBetDetail(
        userId = userId,
        match = Match.objects.filter(match_id=match_id).get(),
        rate = rate,
        mode = mode,
        amount = round(float(totalRate),2),
        team = market,
        betcoin=betCurrCoins,
        date = date.today(),
        comp = 'F'
    )
    
    bet_ins.save()
    leftcoins = float(betCurrCoins) - float(totalRate)
    try:
        uCoin_ins = UserCoins.objects.filter(userId=userId).get()
        uCoin_ins.coins = leftcoins
    except:
        uCoin_ins = UserCoins(
            userId= userId,
            coins = leftcoins
        )
    
    #uCoin_ins.save()
    reData = str(leftcoins)+"_"+str(rate)+"_"+str(totalRate)+"_"+str(mode)+"_"+str(market)
    print(reData)
    return HttpResponse(reData)


def check_Int_val(s):
    for i in s:
        try:
            a = int(i)
            return False
        except:
            continue
    
    return True

def get_wickets(s):
    wickets = ''
    for i in s:
        try:
            a = int(i)
            wickets += i
        except :
            continue
    if wickets != '':
        return int(wickets)
    else:
        return 0
    


@csrf_exempt
def ajaxAutoValidator(request,match_id):
    
    sessionList = BettingDetail.objects.filter(comp='F').order_by('bet_id')
    #print(sessionList)
    for obj in sessionList:
        name = obj.session
        # SL 10 Over Runs
        if 'Over Runs' in name and 'Only' not in name:
           
            over = int(name.split(" ")[-3])
            runs = obj.sessionVal
            match = obj.match
            try:
                checker_obj = list(Match_Score.objects.filter(match=match,over=over-1))[-1]
                
                if checker_obj.run >= runs and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'T'
                    print('yes')
                if checker_obj.run < runs and str(obj.mode).strip().lower() == 'no':
                    print('NO')
                    obj.comp = 'T'
                
                if checker_obj.run >= runs and str(obj.mode).strip().lower() == 'no':
                    obj.comp= 'Loose'
                
                if checker_obj.run < runs and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'Loose'
                
                obj.save()
                print('data saved    ',obj.mode,'  ',checker_obj.run,'   ',runs)        
            except Exception as e:
                print(e)
                continue
        # Player RUns
        elif 'Runs' in name and name.split(' ')[-1] == 'Runs' and check_Int_val(name):
            plist = name.split(" ")
            plist.pop()
            player = " ".join(plist)
            #print(player)
            try:
                checker_obj = list(Match_Score.objects.filter(match=obj.match,player=player))[-1]
            except:
                
                
                player_name = plist[0][0]+"."+plist[1]
                print(plist,'   ','    ',player_name)
                try:
                    checker_obj = list(Match_Score.objects.filter(match=obj.match,player=player_name))[-1]
                except:
                    continue
            
            if checker_obj.player_Curr_Run >= obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                obj.comp = 'T'
            if checker_obj.player_Curr_Run < obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                obj.comp = 'T'
                
            if checker_obj.player_Curr_Run < obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                obj.comp = 'Loose'
            if checker_obj.player_Curr_Run > obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                obj.comp = 'Loose'
            obj.save()
        
        #Fall of the wickets
        elif 'Fall of' in name and 'Wicket' in name:
            wickets = get_wickets(name)
            if wickets == 0:
                continue
            try:
                checker_obj = list(Match_Score.objects.filter(match=obj.match,wickets=wickets))[-1]
                if checker_obj.run >= obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'T'
                if checker_obj.run < obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                    obj.comp = 'T'
                
                if checker_obj.run < obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'Loose'
                if checker_obj.run >= obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                    obj.comp = 'Loose'
                obj.save()
            except :
                continue
                     
    return HttpResponse('')


@csrf_exempt
def ajaxAutoValidator2(request):
    sessionList = BettingDetail.objects.filter(comp='F').order_by('bet_id')
    #print(sessionList)
    for obj in sessionList:
        name = obj.session
        # SL 10 Over Runs
        if 'Over Runs' in name and 'Only' not in name:
           
            over = int(name.split(" ")[-3])
            runs = obj.sessionVal
            match = obj.match
            try:
                checker_obj = list(Match_Score.objects.filter(match=match,over=over-1))[-1]
                
                if checker_obj.run >= runs and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'T'
                    print('yes')
                if checker_obj.run < runs and str(obj.mode).strip().lower() == 'no':
                    print('NO')
                    obj.comp = 'T'
                
                if checker_obj.run >= runs and str(obj.mode).strip().lower() == 'no':
                    obj.comp= 'Loose'
                
                if checker_obj.run < runs and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'Loose'
                
                obj.save()
                print('data saved    ',obj.mode,'  ',checker_obj.run,'   ',runs)        
            except Exception as e:
                print(e)
                continue
        # Player RUns
        elif 'Runs' in name and name.split(' ')[-1] == 'Runs' and check_Int_val(name):
            plist = name.split(" ")
            plist.pop()
            player = " ".join(plist)
            #print(player)
            try:
                checker_obj = list(Match_Score.objects.filter(match=obj.match,player=player))[-1]
            except:
                
                
                player_name = plist[0][0]+"."+plist[1]
                print(plist,'   ','    ',player_name)
                try:
                    checker_obj = list(Match_Score.objects.filter(match=obj.match,player=player_name))[-1]
                except:
                    continue
            
            if checker_obj.player_Curr_Run >= obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                obj.comp = 'T'
            if checker_obj.player_Curr_Run < obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                obj.comp = 'T'
                
            if checker_obj.player_Curr_Run < obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                obj.comp = 'Loose'
            if checker_obj.player_Curr_Run > obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                obj.comp = 'Loose'
            obj.save()
        
        #Fall of the wickets
        elif 'Fall of' in name and 'Wicket' in name:
            wickets = get_wickets(name)
            if wickets == 0:
                continue
            try:
                checker_obj = list(Match_Score.objects.filter(match=obj.match,wickets=wickets))[-1]
                if checker_obj.run >= obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'T'
                if checker_obj.run < obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                    obj.comp = 'T'
                
                if checker_obj.run < obj.sessionVal and str(obj.mode).strip().lower() == 'yes':
                    obj.comp = 'Loose'
                if checker_obj.run >= obj.sessionVal and str(obj.mode).strip().lower() == 'no':
                    obj.comp = 'Loose'
                obj.save()
            except :
                continue
                     
    return HttpResponse('')











