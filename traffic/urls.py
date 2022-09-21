from django.urls import path
from .views import PayoutsListView, DepositsListView, TotalView

urlpatterns = [
    path('deposits/', DepositsListView.as_view()),
    path('payouts/', PayoutsListView.as_view()),
    path('total/', TotalView.as_view()),
]