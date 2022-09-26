from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from traffic.models import Deposit, Payout


class CurrentUser(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        user = self.request.user
        deposits = Deposit.objects.filter(user=user)
        payouts = Payout.objects.filter(user=user)
        balance = sum([deposit.amount for deposit in deposits])
        profit = sum([payout.amount for payout in payouts])

        if not user.username:
            return Response({"error": "Войдите пожалалуйста в аккаунт"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"user": {"name": user.username, "balance": balance, "profit": profit}}, status=status.HTTP_200_OK)
