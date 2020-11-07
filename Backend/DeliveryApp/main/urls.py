from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('customer', views.CustomerView)
router.register('shop', views.ShopView)
router.register('deliveryperson', views.DeliverypersonView)
router.register('profile', views.ProfileView)
urlpatterns = [
    path('', include(router.urls))
]