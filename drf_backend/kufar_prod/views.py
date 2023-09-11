from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *



@api_view(['GET', 'POST'])
def kufar_prod_list(request):
    if request.method == 'GET':
        data = Kufar_prod.objects.all()
        serializer = KufarProdSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        print('post')
        serializer = KufarProdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def kufar_prod_detail(request, pk):
    try:
        kufar_prod = Kufar_prod.objects.get(pk=pk)
    except Kufar_prod.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = KufarProdSerializer(kufar_prod, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        kufar_prod.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



