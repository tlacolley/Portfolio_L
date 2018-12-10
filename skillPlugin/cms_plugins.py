from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _
from .models import Skill

# Parent SkillContainer Plugin
@plugin_pool.register_plugin
class SkillContainerPlugin(CMSPluginBase):
    render_template = 'skillPlugin/all_skill_plugin.html'
    name = 'Skill Container'
    # model = SkillContainer
    allow_children = True  # This enables the parent plugin to accept child plugins
    # You can also specify a list of plugins that are accepted as children,
    # or leave it away completely to accept all
    child_classes = ['SkillPlugin']

    def render(self, context, instance, placeholder):
        context = super(SkillContainerPlugin, self).render(context, instance, placeholder)
        return context


# Child Skill Plugin
@plugin_pool.register_plugin
class SkillPlugin(CMSPluginBase):
    model = Skill
    name = ("Skill Plugin")
    render_template = "skillPlugin/skill_plugin.html"
    parent_classes = ['SkillContainerPlugin']
    cache = False
    
    def render(self, context, instance, placeholder):
      context = super(SkillPlugin, self).render(context, instance, placeholder)
      return context