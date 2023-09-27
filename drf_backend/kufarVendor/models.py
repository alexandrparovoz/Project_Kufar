from django.db import models

class KufarVendors(models.Model):
    name = models.CharField(max_length=240, verbose_name='name')
    email = models.EmailField(blank=True, verbose_name='email')
    prod_description = models.TextField(verbose_name="prod_description")
    phone = models.CharField(max_length=20, verbose_name='phone')
    pub_date = models.DateField("pub_date", auto_now_add=True)
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name='photo')

    def __str__(self):
        return self.name
