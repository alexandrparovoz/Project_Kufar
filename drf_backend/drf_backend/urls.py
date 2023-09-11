from django.contrib import admin
from django.urls import path, re_path
from kufar_prod import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/kufar_prod/$', views.kufar_prod_list),
    re_path(r'^api/kufar_prod/(\d+)$', views.kufar_prod_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


