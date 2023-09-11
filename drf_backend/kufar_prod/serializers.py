from rest_framework import serializers
from .models import Kufar_prod

class KufarProdSerializer(serializers.ModelSerializer):

    class Meta:
        model = Kufar_prod
        fields = ('pk', 'name', 'email', 'prod_description', 'phone', 'pub_date','photo')