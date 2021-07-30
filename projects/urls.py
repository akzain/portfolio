from django.urls import path
from .views import *

urlpatterns = [
    path("", index, name="homepage"),
    path("single-project/<str:pk>/", singleProject, name="single_project"),
]
