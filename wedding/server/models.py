from django.db import models

# Create your models here.
class Campaign(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    start_date = models.DateTimeField(auto_now=False)
    