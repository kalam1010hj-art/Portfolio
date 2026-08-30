from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ContactSerializers
from ..models import ContactMessage


# Create your views here.

class ContactView(APIView):
    def get(self,request):
        contactMessages = ContactMessage.objects.all()
        serializer = ContactSerializers(contactMessages,many = True)
        return Response(serializer.data)
    def post(self,request):
        serializer = ContactSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"error":"Got an error"})