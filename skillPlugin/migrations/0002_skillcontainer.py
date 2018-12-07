# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-12-07 15:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0020_old_tree_cleanup'),
        ('skillPlugin', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SkillContainer',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, related_name='skillplugin_skillcontainer', serialize=False, to='cms.CMSPlugin')),
                ('skills', models.ManyToManyField(to='skillPlugin.Skill')),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
    ]
