from rest_framework import serializers
from .models import Deposit, Payout


class DepositSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Deposit
        fields = ("user", "amount", )


class PayoutSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Payout
        fields = ("user", "amount", )