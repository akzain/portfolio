from django.urls import path
from .views import *

urlpatterns = [
    path('routes/', getRoutes),
    path('', getProjects),
    path('project/<str:pk>/', getProject),
    path('create/', createProject),
    path('project/<str:pk>/update/', updateProject),
    path('project/<str:pk>/delete/', deleteProject),
]