from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/upload_images/', views.upload_asset),

]