from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProjectSerializer
from ..models import Project
# Create your views here.

class ProjectView(APIView):
    def get(self,request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects,many =True)
        try:
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response({"error":"Not found"})

    def post(self,request):
        serializer = ProjectSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)