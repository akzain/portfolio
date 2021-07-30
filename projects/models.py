from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.

class Projects(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField()
    image = models.ImageField(null=True, blank=True)
    source_code = models.URLField(null=True, blank=True)
    demo_link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title