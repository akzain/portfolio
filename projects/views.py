from django.shortcuts import render
from .models import *

# Create your views here.


def index(request):
    projects = Projects.objects.all()
    context = {"projects": projects}
    return render(request, "pages/main.html", context)


def singleProject(request, pk):
    projects = Projects.objects.get(id=pk)
    context = {"projects": projects}
    return render(request, "pages/projects/single-project.html", context)
