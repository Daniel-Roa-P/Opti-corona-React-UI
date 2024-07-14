from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/update/', views.update_impex),
    path('api/v1/get_classification_list/', views.get_classification_list),
    path('api/v1/get_attributes_list/', views.get_attributes_list),
    path('api/v1/get_attibute_structure/', views.get_attibute_structure),

]