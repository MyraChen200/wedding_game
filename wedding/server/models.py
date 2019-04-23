from django.db import models

# Create your models here.
class Campaign(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    start_date = models.DateTimeField(auto_now=False)
    # game = models.ManyToManyField('Game', through='Campaign_Game')
    def __str__(self):
        return self.name

class Game(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    campaign = models.ManyToManyField('Campaign', through='Campaign_Game')

    def __str__(self):
        return self.name

class Campaign_Game(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    game = models.ForeignKey('Game', on_delete=models.CASCADE)
    photo_frame_path = models.FileField(upload_to='photo_frame/')

    def __str__(self):
        return "{}_{}".format(self.campaign.name, self.game.name)

class Photos(models.Model):
    user = models.CharField(max_length=255, null=False, blank=False)
    upload_path = models.CharField(max_length=255, null=False, blank=False)
    show_path = models.CharField(max_length=255, null=False, blank=False)
