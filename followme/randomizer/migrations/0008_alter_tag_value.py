# Generated by Django 3.2.4 on 2021-06-11 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('randomizer', '0007_auto_20210611_0822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='value',
            field=models.CharField(default=models.CharField(max_length=30), max_length=30),
        ),
    ]