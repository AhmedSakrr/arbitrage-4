from django import forms
from django.contrib import admin
from django.contrib.auth.models import User, Group
from traffic.admin import DepositInline, PayoutInline


class UserAdminCustomForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'password', "is_active")


class UserAdminCustom(admin.ModelAdmin):
   list_display = ('username', "is_superuser",)
   list_filter = ('is_staff', 'is_superuser')
   search_fields = ('username', )
   form = UserAdminCustomForm
   inlines = [
        DepositInline,
        PayoutInline
    ]

   # user__pay
   # @admin.display(description='Author Name', ordering='author__name')
   # def get_author_name(self, obj):
   #    return obj.author.name


admin.site.unregister(Group)
admin.site.unregister(User)
admin.site.register(User, UserAdminCustom)