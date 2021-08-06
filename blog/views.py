from django.shortcuts import render
from .models import *
# Create your views here.
def blogs(request):
    blogs = Blog.objects.all()
    context = {'blogs':blogs}
    return render(request, 'components/blogs/blogs.html', context)