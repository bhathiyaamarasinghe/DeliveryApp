# Generated by Django 3.0.5 on 2020-11-07 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='deliveryperson',
            name='email',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='shop',
            name='email',
            field=models.CharField(max_length=30),
        ),
    ]
