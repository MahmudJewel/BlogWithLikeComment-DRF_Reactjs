from django.urls import path, include
from authentication.views import UserCreateView

urlpatterns = [
    path('add-user', UserCreateView.as_view(), name='add-user'),
    
    # jwt auth 
    path('', include('djoser.urls.jwt')),
]