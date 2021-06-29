from django.db import models
from django.db.models.fields.related import ForeignKey
from requests.sessions import session

# Create your models here.
class Match(models.Model):
    match_pk = models.AutoField(primary_key=True) 
    match_id = models.CharField(max_length=100)
    match_name =  models.CharField(max_length=150)
    match_type =  models.CharField(max_length=150)
    match_starttime = models.CharField(max_length=150)
    match_details = models.JSONField()
    
    def __str__(self):
        return self.match_name+'  '+self.match_id 
    

class Match_Score(models.Model):
    score_pk = models.AutoField(primary_key=True)
    match = models.ForeignKey(Match,on_delete=models.CASCADE)
    ining = models.IntegerField(null=True)
    over = models.IntegerField()
    ball = models.IntegerField()
    run =  models.IntegerField()
    wickets = models.IntegerField()
    runner = models.CharField(max_length=100)
    player =  models.CharField(max_length=100)
    player_Curr_Run = models.IntegerField()
    score_Json = models.JSONField()
    
    def __str__(self):
        return str(self.over)+'     |     '+str(self.ball)+"      |       "+str(self.player)+"        |     "+str(self.run)
    
    
class BettingDetail(models.Model):
    bet_id = models.AutoField(primary_key=True)
    userId = models.CharField(max_length=100)
    match = models.ForeignKey(Match,on_delete=models.CASCADE)
    session = models.CharField(max_length=500)
    mode = models.CharField(max_length=5)
    sessionVal = models.IntegerField()
    sessionRate = models.FloatField()
    betcoin = models.FloatField()
    totalrate = models.FloatField()
    date = models.DateField(null=True)
    comp = models.CharField(max_length=5,null=True)
    
    def __str__(self):
        return self.userId +" | " +str(self.bet_id)+" | "+str(self.match)

class LaghaiKhaliBetDetail(models.Model):
    bet_id = models.AutoField(primary_key=True)
    userId = models.CharField(max_length=100)
    match = models.ForeignKey(Match,on_delete=models.CASCADE)
    rate = models.FloatField()
    amount =  models.FloatField()
    mode = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    betcoin = models.FloatField()
    date = models.DateField(null=True)
    comp = models.CharField(max_length=5,null=True)
    
    def __str__(self):
        return self.userId +" | " +str(self.bet_id)+" | "+str(self.match)
    

class UserCoins(models.Model):
    coin_id = models.AutoField(primary_key=True)
    userId = models.CharField(max_length=100)
    coins = models.FloatField()
    
    def __str__(self):
        return self.userId 