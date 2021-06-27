# Generated by Django 3.2.4 on 2021-06-26 07:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bsf_app', '0003_match_score'),
    ]

    operations = [
        migrations.CreateModel(
            name='BettingDetail',
            fields=[
                ('bet_id', models.AutoField(primary_key=True, serialize=False)),
                ('userId', models.CharField(max_length=100)),
                ('session', models.CharField(max_length=500)),
                ('sessionVal', models.FloatField()),
                ('sessionRate', models.FloatField()),
                ('betcoin', models.FloatField()),
                ('totalrate', models.FloatField()),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bsf_app.match')),
            ],
        ),
    ]