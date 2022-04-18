from rest_framework import serializers
from blog.models import Category, Blog, Comment


class AllCommentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'  # ['id','author', 'blog', 'comment']
        depth=1
        # lookup_field = 'slug'

# for commenting
class CommentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

# all blogs serializers and single blog with comments
class BlogSerializers(serializers.ModelSerializer):
    blog_comment = AllCommentsSerializers(many=True)

    class Meta:
        model = Blog
        fields = ['id', 'author', 'category', 'likes', 'title', 'slug',
                  'desc', 'updated', 'blog_comment']  # '__all__'
        lookup_field = 'slug'
        depth = 1


# create blog
class BlogSerializersForViewset(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'author', 'category', 'title', 'desc']  # '__all__'
        lookup_field = 'slug'

