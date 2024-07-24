from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', include('upload_app.urls')),
    path('update/', include('update_app.urls')),
    path('auth/', include('user_api.urls'))
]
