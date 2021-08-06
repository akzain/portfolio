from django.db import models
from ckeditor.fields import RichTextField
import uuid

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=250)
    header_image = models.ImageField(null=True, blank=True)
    body = RichTextField()
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)