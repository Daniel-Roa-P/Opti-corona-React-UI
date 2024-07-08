from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/upload/', views.upload_asset),
    path('api/v1/upload/get_assets_list/', views.get_assets_list),
    path('api/v1/upload/get_asset_structure/', views.get_asset_structure),

]