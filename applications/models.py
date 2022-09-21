from ctypes import util
from time import timezone
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from .fields import IntegerRangeField

class Application(models.Model):
    tg = models.CharField(max_length=32)
    email = models.EmailField()
    payment = IntegerRangeField(min_value=500, max_value=5000)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.email


class Withdraw(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username