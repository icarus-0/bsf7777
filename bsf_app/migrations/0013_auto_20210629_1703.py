# Generated by Django 3.2.4 on 2021-06-29 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsf_app', '0012_auto_20210629_1653'),
    ]

    operations = [
        migrations.AddField(
            model_name='bettingdetail',
            name='comp',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AddField(
            model_name='laghaikhalibetdetail',
            name='comp',
            field=models.CharField(max_length=5, null=True),
        ),
    ]