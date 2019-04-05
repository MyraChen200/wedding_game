from .settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': "127.0.0.1",
        'NAME': 'wedding',
        'USER': 'myra',
        'PASSWORD': 'gomyra',
    }
}
