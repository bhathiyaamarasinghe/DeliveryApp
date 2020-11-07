from django.db import models

class User(models.Model):
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=10)


class Customer(models.Model):
    username = models.CharField (max_length=10)
    email = models.CharField(max_length=30)
    mobile = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    account = models.CharField(max_length=20)


class Shop(models.Model):
    shopname = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    mobile = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    account = models.CharField(max_length=10)
    bisreg = models.CharField(max_length=20)


class Deliveryperson(models.Model):
    name = models.CharField(max_length=15)
    email = models.CharField(max_length=30)
    mobile = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    account = models.CharField(max_length=20)


class Permission(models.Model):
    permissionID = models.IntegerField()
    permissionType = models.CharField(max_length=20)


class Profile(models.Model):
    lang = models.FloatField()
    lat = models.FloatField()


class Cart(models.Model):
    cartID = models.IntegerField()
    qr_ID = models.IntegerField()


class Rate(models.Model):
    rateNo =models.IntegerField()
    customerEmail = models.CharField(max_length=30, null=True)
    rate = models.IntegerField()


class Item(models.Model):
    itemID = models.IntegerField()
    itemName = models.CharField(max_length=20)
    itemDes = models.TextField()


class SubCategory(models.Model):
    subCatID = models.IntegerField()
    subCatName = models.CharField(max_length=20)


class Category(models.Model):
    catID = models.IntegerField()
    catName = models.CharField(max_length=20)


class Payment(models.Model):
    paymentID = models.IntegerField()
    paymentMethod = models.CharField(max_length=10)
    paymentDate = models.DateTimeField()


class OnlinePayment(models.Model):
    onlinePaymentID = models.IntegerField()
    cardNo = models.IntegerField()
    cartType = models.CharField(max_length=10)
    exp_Date = models.DateField()
    transaction_time = models.DateTimeField()


class Comment(models.Model):
    commentID = models.IntegerField()
    comment = models.TextField()
    customerID = models.IntegerField()
    customerEmail = models.CharField(max_length=30, null=True)