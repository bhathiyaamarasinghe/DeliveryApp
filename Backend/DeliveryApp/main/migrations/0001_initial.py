# Generated by Django 3.0.5 on 2020-11-07 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=10)),
                ('email', models.CharField(max_length=20)),
                ('mobile', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=20)),
                ('account', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Deliveryperson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
                ('email', models.CharField(max_length=20)),
                ('mobile', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=20)),
                ('account', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shopname', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=20)),
                ('mobile', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=20)),
                ('account', models.CharField(max_length=10)),
                ('bisreg', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=10)),
            ],
        ),
    ]