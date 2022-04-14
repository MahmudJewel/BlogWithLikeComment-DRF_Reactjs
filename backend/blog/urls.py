from django.urls import path, include
from blog.views import BlogPostListView
# from authentication.views import UserCreateView

urlpatterns = [
    # jwt auth 
    path('', include('djoser.urls.jwt')),
    
    path('allblogs', BlogPostListView.as_view(), name='allblogs'),
    
    
]