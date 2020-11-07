from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Customer, Shop, Deliveryperson, Profile
from .serializers import UserSerializers, CustomerSerializers, ShopSerializers, DeliverypersonSerializers, ProfileSerializers

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers

class CustomerView(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializers

class ShopView(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializers

class DeliverypersonView(viewsets.ModelViewSet):
    queryset = Deliveryperson.objects.all()
    serializer_class = DeliverypersonSerializers

class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers
