from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from traffic.admin import DepositInline, PayoutInline
from .models import UserAccount

class UserAdminCustomForm(forms.ModelForm):
    class Meta:
        model = UserAccount
        fields = ('username', 'password', "is_active")


class UserAdminCustom(UserAdmin):
   list_display = ('username', "is_superuser",)
   list_filter = ('is_superuser', )
   search_fields = ('username', 'is_superuser')
   fieldsets = ()
   form = UserAdminCustomForm
   inlines = [
        DepositInline,
        PayoutInline
    ]

   @admin.display(description='Author Name', ordering='author__username')
   def get_author_name(self, obj):
      return obj.author.username


admin.site.unregister(Group)
# admin.site.unregister(User)
admin.site.register(UserAccount, UserAdminCustom)