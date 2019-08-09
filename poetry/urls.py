from poetry import views
from django.urls import path

urlpatterns = [
    path('', views.into, name='into'),
    path('index', views.index, name='index'),
    path('test', views.test, name='test'),
]
