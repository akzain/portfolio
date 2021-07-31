from django.db.models.base import Model
from rest_framework.serializers import ModelSerializer
from projects.models import *

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
