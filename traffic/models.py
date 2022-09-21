from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Deposit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user.username


class Payout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user.username