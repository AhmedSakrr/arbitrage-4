# Generated by Django 4.1 on 2022-09-06 16:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('traffic', '0003_deposit_total'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deposit',
            name='total',
        ),
    ]
