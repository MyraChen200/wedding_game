from django.contrib import admin

# Register your models here.
from server.models import Campaign, Game, Campaign_Game

admin.site.register(Campaign)
admin.site.register(Game)
admin.site.register(Campaign_Game)