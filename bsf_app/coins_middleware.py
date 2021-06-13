from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from django.http import HttpResponse, JsonResponse
import requests
import json


class UpdateCoinsMiddleware(MiddlewareMixin):

    def process_request(self, request):
        user_name = request.COOKIES.get("user_name")
        response = HttpResponse('Coins Updated')
        if user_name:
	        profile_api_response = requests.get(
	            (settings.USER_PROFILE).format(user_id=user_name))
	        if profile_api_response.status_code == 200:
	            user_profile = json.loads(profile_api_response.content)
	        else:
	            user_profile = {}
	        response.set_cookie(
	            "user_coins", user_profile.get("Total_Coins"))

	        print(user_profile.get("Total_Coins"))

	        return None
        return None
