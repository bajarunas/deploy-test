from django.urls import path, include
from .models import Type
from rest_framework import serializers

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ['id', 'title']