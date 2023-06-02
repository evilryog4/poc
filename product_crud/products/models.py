from django.db import models

# Create your models here.

from django.db import models

class Product(models.Model):
    nombre = models.CharField(max_length=255)
    precio = models.FloatField()
    descripcion = models.TextField()

