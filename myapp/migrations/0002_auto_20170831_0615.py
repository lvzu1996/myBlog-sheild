# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-31 06:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accounts',
            name='password',
            field=models.CharField(max_length=256),
        ),
    ]
