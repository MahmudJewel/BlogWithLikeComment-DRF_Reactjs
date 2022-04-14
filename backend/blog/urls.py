from django.urls import path, include
# from authentication.views import UserCreateView

urlpatterns = [
    
    # jwt auth 
    path('', include('djoser.urls.jwt')),
]