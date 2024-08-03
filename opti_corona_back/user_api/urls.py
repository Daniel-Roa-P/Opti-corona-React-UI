from django.urls import path
from . import views

urlpatterns = [
	path('api/v1/register/', views.UserRegister.as_view(), name='register'),
	path('api/v1/login/', views.UserLogin.as_view(), name='login'),
	path('api/v1/logout/', views.UserLogout.as_view(), name='logout'),
	path('api/v1/user/', views.UserView.as_view(), name='user'),
]