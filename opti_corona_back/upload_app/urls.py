from django.urls import path
from . import views

urlpatterns = [

    path('', views.hello),
    path('about/', views.about),
    path('api/v1/upload_images/', views.upload_images),

]