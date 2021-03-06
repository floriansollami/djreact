from django.db import models
from django.utils import timezone
from authentication.models import Categorie
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()

class Music(models.Model):
    title = models.CharField(max_length=30)
    artist = models.CharField(max_length=30, blank=True, null=True)
    description = models.CharField(max_length=30)
    release_date = models.DateField(default=timezone.now, verbose_name='Realease date')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Categorie, on_delete=models.CASCADE)
    album = models.CharField(max_length=30, blank=True, null=True)
    url = models.CharField(max_length=60, blank=True, null=True)
    music_cover = models.CharField(max_length=60, blank=True, null=True)
    


def __str__(self):
    return self.titre