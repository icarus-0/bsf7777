# Generated by Django 3.2.4 on 2021-06-26 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsf_app', '0006_bettingdetail_mode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bettingdetail',
            name='sessionVal',
            field=models.IntegerField(),
        ),
    ]
