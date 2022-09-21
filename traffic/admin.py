from django.contrib import admin
from .models import Deposit, Payout
from django import forms

class TrafficCustomForm(forms.ModelForm):
    class Meta:
        model = Deposit
        fields = ('amount', )


class DepositInline(admin.TabularInline):
    model = Deposit
    form = TrafficCustomForm


class PayoutInline(admin.TabularInline):
    model = Payout
    form = TrafficCustomForm