from django.db import models


class Type(models.Model):
    title = models.CharField(max_length=100)