# Generated by Django 3.2.4 on 2021-06-27 08:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bsf_app', '0007_alter_bettingdetail_sessionval'),
    ]

    operations = [
        migrations.CreateModel(
            name='LaghaiKhaliBetDetail',
            fields=[
                ('bet_id', models.AutoField(primary_key=True, serialize=False)),
                ('userId', models.CharField(max_length=100)),
                ('rate', models.FloatField()),
                ('amount', models.FloatField()),
                ('mode', models.CharField(max_length=100)),
                ('team', models.CharField(max_length=100)),
                ('betcoin', models.FloatField()),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bsf_app.match')),
            ],
        ),
    ]