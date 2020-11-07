from django.contrib import admin

# Register your models here.
from .models import User, Customer, Shop, Deliveryperson


admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Shop)
admin.site.register(Deliveryperson)