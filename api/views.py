from django.template import response
from .serializers import *
from projects.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(["GET"])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "body": None,
            "description": "Return array of notes",
        },
        {
            "Endpoint": "/notes/note/id",
            "method": "GET",
            "body": None,
            "description": "Returns a single note object",
        },
        {
            "Endpoint": "/notes/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "create a note",
        },
        {
            "Endpoint": "/notes/note/id/update",
            "method": "PUT",
            "body": {"body": ""},
            "description": "update a note",
        },
        {
            "Endpoint": "/notes/note/id/delete",
            "method": "DELETE",
            "body": None,
            "description": "deletes an existing note",
        },
    ]

    return Response(routes)


@api_view(["GET"])
def getProjects(request):
    projects = Projects.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProject(request, pk):
    projects = Projects.objects.get(id=pk)
    serializer = ProjectSerializer(projects, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def createProject(request):
    data = request.data
    projects = Projects.objects.create(title=data["title"], body=data["body"])
    serializer = ProjectSerializer(projects, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def updateProject(request, pk):
    data = request.data
    projects = Projects.objects.get(id=pk)
    serializer = ProjectSerializer(projects, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(["DELETE"])
def deleteProject(request, pk):
    projects = Projects.objects.get(id=pk)
    projects.delete()
    return Response("Project was deleted")
