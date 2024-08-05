from django.urls import path
from . import views

urlpatterns = [

    path('api/v1/generate_update_csv/', views.generate_update_csv),
    path('api/v1/get_assets_list/', views.get_assets_list),
    path('api/v1/get_asset_structure/', views.get_asset_structure),

]