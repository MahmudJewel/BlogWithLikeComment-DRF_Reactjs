from django.urls import path, include
from blog.views import BlogPostListView,BlogPostDetailsView, BlogViewset
# from authentication.views import UserCreateView
# router 
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('all', BlogViewset, basename='all')


urlpatterns = [
    # jwt auth 
    path('', include('djoser.urls.jwt')),
    
    path('allblogs', BlogPostListView.as_view(), name='allblogs'),
    path('<slug>', BlogPostDetailsView.as_view(), name='singleblog'),
    path('', include(router.urls)),
    
    
]