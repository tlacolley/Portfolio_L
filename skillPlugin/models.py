# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from cms.models.pluginmodel import CMSPlugin

from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


# Child Skill Model Plugin
class Skill(CMSPlugin):
  name = models.CharField(max_length=50)
  value = models.IntegerField(
          default=0,
          validators=[MaxValueValidator(100), MinValueValidator(0)]
        )
  

# Parent Container Model Plugin
