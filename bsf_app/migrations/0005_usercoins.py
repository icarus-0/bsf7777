# Generated by Django 3.2.4 on 2021-06-26 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsf_app', '0004_bettingdetail'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCoins',
            fields=[
                ('coin_id', models.AutoField(primary_key=True, serialize=False)),
                ('userId', models.CharField(max_length=100)),
                ('coins', models.FloatField()),
            ],
        ),
    ]
