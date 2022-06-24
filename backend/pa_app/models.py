from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.name}'

class Contact(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    address = models.CharField(max_length=25)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=25)
    zip = models.CharField(max_length=5)
    phone = models.CharField(max_length=12)
    email = models.EmailField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='contacts')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Type(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.name}'

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=64)
    type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='events')

    def __str__(self):
        return f'{self.name}'

class Subject(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.name}'

class Note(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    website = models.URLField(null=True, blank=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='notes')

    def __str__(self):
        return f'{self.name}'
