from django.urls import path, include
from blog.views import BlogPostListView,BlogPostDetailsView
# from authentication.views import UserCreateView

urlpatterns = [
    # jwt auth 
    path('', include('djoser.urls.jwt')),
    
    path('allblogs', BlogPostListView.as_view(), name='allblogs'),
    path('<slug>', BlogPostDetailsView.as_view(), name='singleblog'),
    
    
]