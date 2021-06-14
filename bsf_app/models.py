from django.db import models

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