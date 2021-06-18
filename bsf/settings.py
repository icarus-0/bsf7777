
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'vb166+54$hc1g#d!1htovg9+fwu2nj0n&hun&y=@a%w2*8pfn6'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = False
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'bsf_app'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'bsf_app.coins_middleware.UpdateCoinsMiddleware'
]

ROOT_URLCONF = 'bsf.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bsf.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.sqlite3',
         'NAME': BASE_DIR / 'db.sqlite3',
     }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True



# STATIC_ROOT = ""
STATIC_ROOT = 'static'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images/')
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, '/static'), ]


# STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR,'static')
# STATICFILES_DIRS = [
#     'D:/home/site/wwwroot/static',
#     os.path.join(BASE_DIR,'static'),
# ]


ADMIN_USERS = ["priyanshu", "newuser1"]



''' API Links '''

# INPLAY = "http://ec2-18-216-229-30.us-east-2.compute.amazonaws.com:8080/IPL/newbetfairinplay/getinplay - test"
INPLAY = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/newbetfairinplay/getinplay"
OTP = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/OTPService/getotp"
AUTH = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/Auth/authenticateuser"
# UPCOMING = "http://ec2-18-216-229-30.us-east-2.compute.amazonaws.com:8080/IPL/newbetfairupcoming/getupcoming"
UPCOMING = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/newbetfairupcoming/getupcoming"
ODDS_SESSION = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/betfair_odds_session/getmatchodds_session/{market_id}"
# MATCH_ODDS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/betfair_odds/getmatchodds/{market_id}"
# MATCH_SESSION = " http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/betfair_odds_session/getmatchodds_session/{market_id}"
CREATE_BET = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/place_bet/place"
SCORE_API = "https://ips.betfair.com/inplayservice/v1/scores?_ak=nzIFcwyWhrlwYMrh&alt=json&eventIds={event_id}&locale=en_GB&productType=EXCHANGE&regionCode=UK"
# SCORE_API = "http://ec2-13-58-41-168.us-east-2.compute.amazonaws.com:8080/IPL/betfair/getmatchscore/{eventid}"
USER_PROFILE = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/fetchuserdetails/{user_id}"
BET_DETAILS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/fetchbetdetails/{user_id}"
MARKET_BET_DETAILS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/fetchbetdetails/getspecific?userid={userid}&marketid={market_id}"
BET_RECORDS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/Ledger/distinctbetrecords"
UPDATE_BET_RECORDS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/Ledger/updatestatus"
USERPLAYED_LIST = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/fetchbetdetails/getmatchsplayedlist?userid={userid}"
PASSWORD_RESET = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/password/reset"
INPLAY_DEDUCTION = " http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/inplaytracker/check&deduct"
FILTER_BET_RECORDS = "http://ec2-18-223-117-37.us-east-2.compute.amazonaws.com:8080/IPL/Ledger/fetchbetrecords?bet_date={bet_date}"

TEEN_PATTI_T20 = "http://128.199.232.246:3000/v1-api/demo/getCasino/ltp"
# BET_RECORD = " http://ec2-18-216-229-30.us-east-2.compute.amazonaws.com:8080/IPL/Ledger/fetchbetrecords?market_id={market_id}&bet_date={bet_date}"