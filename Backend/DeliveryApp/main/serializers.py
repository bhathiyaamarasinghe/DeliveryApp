from rest_framework import serializers
from .models import User, Customer, Shop, Deliveryperson, Profile

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')


class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'username', 'email', 'mobile', 'password', 'address', 'account')

class ShopSerializers(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('id', 'shopname', 'email', 'mobile', 'password', 'address', 'account','bisreg')

class DeliverypersonSerializers(serializers.ModelSerializer):
    class Meta:
        model = Deliveryperson
        fields = ('id', 'name', 'email', 'mobile', 'password', 'address', 'account')

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'lang', 'lat')