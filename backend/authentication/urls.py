from django.urls import path, include
from authentication.views import UserCreateView#, UserView

urlpatterns = [
    path('add-user', UserCreateView.as_view(), name='add-user'),
    # path('user-info', UserView.as_view(), name='user-info'),
    
    # jwt auth 
    path('', include('djoser.urls.jwt')),
]