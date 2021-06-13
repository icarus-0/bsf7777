from django import template
from datetime import date, datetime
from dateutil.parser import parse
import dateutil.parser as dtp
import urllib
import time

register = template.Library()


@register.filter
def filter_date(value, arg):
    try:
        # date_obj = parse(time.ctime(int(value)))
        date_obj = parse(value)
        if arg == "d":
            return date_obj.strftime("%d")
        elif arg == "month":
            return date_obj.strftime("%B")
        elif arg == "year":
            return date_obj.strftime("%Y")
        elif arg == "time":
            return date_obj.strftime("%H:%M %p")
        else:
            return 0
    except:
        if arg == "d":
            return "01"
        elif arg == "month":
            return "01"
        elif arg == "year":
            return "2021"
        elif arg == "time":
            return "01:01"
        else:
            return 0


@register.filter
def get_encoded_dict(data_dict):
    return urllib.parse.urlencode(data_dict)


@register.filter
def filter_yes_no(value, arg):
    if ')' in value and '(' in value:
        if arg == "runs":
            return value.replace(')', '').split('(')[1]
        elif arg == "yes_no":
            return value.replace(')', '').split('(')[0]
        else:
            return value
    return '---'


@register.filter
def update_market_rate(market_rate):
    if market_rate:
        return str(round(float(market_rate) - 1, 2))
    return ""

@register.filter
def update_session_rate(session_rate):
    if session_rate:
        return str(round(float(session_rate) / 100, 2))
    return ""