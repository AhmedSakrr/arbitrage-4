from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from .models import Deposit, Payout
from .serializers import DepositSerializer, PayoutSerializer
from rest_framework.response import Response

class DepositsListView(ListAPIView):
    queryset = Deposit.objects.order_by("-date")[:7]
    serializer_class = DepositSerializer


class PayoutsListView(ListAPIView):
    queryset = Payout.objects.order_by("-date")[:7]
    serializer_class = PayoutSerializer


class TotalView(APIView):

    def get(self, requests, format=None):
        total = 0
        deposits = Deposit.objects.all()
        if len(deposits) > 0:
            for deposit in deposits:
                total += deposit.amount
        return Response({"total": str(total)})
