# Generated by Django 4.2.5 on 2023-09-27 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kufarVendor', '0002_kufarVendor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kufarvendors',
            name='photo',
            field=models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='photo'),
        ),
    ]