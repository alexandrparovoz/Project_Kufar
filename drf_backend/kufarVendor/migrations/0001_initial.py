# Generated by Django 4.2.5 on 2023-09-12 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='KufarVendors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=240, verbose_name='name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email')),
                ('prod_description', models.TextField(verbose_name='prod_description')),
                ('phone', models.CharField(max_length=20, verbose_name='phone')),
                ('pub_date', models.DateField(auto_now_add=True, verbose_name='pub_date')),
                ('photo', models.CharField(max_length=512, verbose_name='photo')),
            ],
        ),
    ]