from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _
from .models import Skill


@plugin_pool.register_plugin
class SkillPlugin(CMSPluginBase):
    model = Skill
    name = ("Skill Plugin")
    render_template = "skill_plugin.html"
    cache = False
    
    def render(self, context, instance, placeholder):
      context = super(SkillPlugin, self).render(context, instance, placeholder)
      return context