from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('categories', CategoryViewSet, basename='category')
router.register('contacts', ContactViewSet, basename='contact')
router.register('types', TypeViewSet, basename='type')
router.register('events', EventViewSet, basename='event')
router.register('subjects', SubjectViewSet, basename='subject')
router.register('notes', NoteViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),
]