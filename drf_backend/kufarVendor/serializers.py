from rest_framework import serializers
from .models import KufarVendors

class KufarVendorsSerializer(serializers.ModelSerializer):

    class Meta:
        model = KufarVendors
        fields = ('pk', 'name', 'email', 'prod_description', 'phone', 'pub_date', 'photo')