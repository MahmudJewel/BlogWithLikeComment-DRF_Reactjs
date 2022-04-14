from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from blog.models import Category, Blog, Comment
from blog.serializers import BlogSerializers

# Create your views here.

# shows all blogs on home page 
class BlogPostListView(ListAPIView):
    queryset = Blog.objects.order_by('-updated')
    serializer_class = BlogSerializers
    lookup_field = 'slug'
    # permission_classes = (permissions.AllowAny)