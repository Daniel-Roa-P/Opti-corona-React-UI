from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/update_impex/', views.update_impex),

]