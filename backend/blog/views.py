from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from blog.models import Category, Blog, Comment
from blog.serializers import BlogSerializers, BlogSerializersForViewset, AllCommentsSerializers

# Create your views here.

# shows all blogs on home page

# all blogs view 
class BlogPostListView(ListAPIView):
    queryset = Blog.objects.order_by('-updated')
    serializer_class = BlogSerializers
    lookup_field = 'slug'
    # permission_classes = (permissions.AllowAny)


# single blog with details
class BlogPostDetailsView(RetrieveAPIView):
    queryset = Blog.objects.order_by('-updated')
    serializer_class = BlogSerializers
    lookup_field = 'slug'
    # permission_classes = (permissions.AllowAny, )


# create, update, edit blogs
class BlogViewset(viewsets.ModelViewSet):
    serializer_class = BlogSerializersForViewset
    queryset = Blog.objects.all()
    permission_classes=(IsAuthenticated,)

# view posts comment
# class CommentListView(ListAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = AllCommentsSerializers
#     lookup_field = 'slug'
#     # permission_classes = (permissions.AllowAny,)
#     def get(self, request, **kwargs):
#         pk=self.kwargs['pk']
#         comments = Comment.objects.filter(blog=pk)
#         serializer = AllCommentsSerializers(comments, many=True)
#         return Response(serializer.data)