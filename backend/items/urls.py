from .views import TypeViewSet
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('type', TypeViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]