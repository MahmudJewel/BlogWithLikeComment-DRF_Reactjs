from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from blog.models import Category, Blog, Comment
from blog.serializers import BlogSerializers, BlogSerializersForViewset, AllCommentsSerializers, CommentsSerializers

# Create your views here.

# shows all blogs on home page
class BlogPostListView(ListAPIView):
    queryset = Blog.objects.order_by('-updated')
    serializer_class = BlogSerializers
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


# single blog with details
class BlogPostDetailsView(RetrieveAPIView):
    queryset = Blog.objects.order_by('-updated')
    serializer_class = BlogSerializers
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


# create, update, edit blogs
class BlogViewset(viewsets.ModelViewSet):
    serializer_class = BlogSerializersForViewset
    queryset = Blog.objects.all()
    permission_classes = (IsAuthenticated,)

    # like and unlike button 
    def partial_update(self, request, **kwargs):
        # print('prtial update id: ', kwargs)
        pk=self.kwargs['pk']
        blog = Blog.objects.get(id=pk)
        if blog.likes.filter(id=request.user.id).exists():
            blog.likes.remove(request.user)
        else:
            blog.likes.add(request.user)
        serializer = BlogSerializersForViewset(blog)
        return Response(serializer.data)


# create, update, edit blogs
class CommentViewset(viewsets.ModelViewSet):
    serializer_class = CommentsSerializers
    queryset = Comment.objects.all()
    permission_classes = (IsAuthenticated,)

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
