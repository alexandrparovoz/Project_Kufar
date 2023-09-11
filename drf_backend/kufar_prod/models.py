from django.db import models

class Kufar_prod(models.Model):
    name = models.CharField(max_length=240, verbose_name='Name')
    email = models.EmailField(blank=True, verbose_name='email')
    prod_description = models.TextField(verbose_name="prod_description")
    phone = models.CharField(max_length=20, verbose_name='phone')
    pub_date = models.DateField("prod_date", auto_now_add=True)
    photo = models.CharField(max_length=512, verbose_name='photo')

    def __str__(self):
        return self.name
