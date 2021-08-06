from django.urls import path
from .views import *

urlpatterns = [
    path('', getRoutes),
    path('projects', getProjects),
    path('project/<str:pk>/', getProject),
    path('create-project/', createProject),
    path('update-project/<str:pk>/', updateProject),
    path('delete-project/<str:pk>/', deleteProject),
]
