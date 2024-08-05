from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/generate_update_impex/', views.generate_update_impex),
    path('api/v1/get_classification_list/', views.get_classification_list),
    path('api/v1/get_attributes_list/', views.get_attributes_list),

]