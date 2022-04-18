from django.urls import path, include
from blog.views import BlogPostListView,BlogPostDetailsView, BlogViewset, CommentListView
# from authentication.views import UserCreateView
# router 
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('all', BlogViewset, basename='all')


urlpatterns = [
    # jwt auth 
    path('', include('djoser.urls.jwt')),
    
    path('comments/<int:pk>', CommentListView.as_view(), name='comments'),
    path('allblogs', BlogPostListView.as_view(), name='allblogs'),
    path('<slug>', BlogPostDetailsView.as_view(), name='singleblog'),
    path('', include(router.urls)),
    
    
]