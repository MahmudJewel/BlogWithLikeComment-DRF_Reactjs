from rest_framework import serializers
from blog.models import Category, Blog, Comment

class BlogSerializers(serializers.ModelSerializer):
	class Meta:
		model = Blog
		fields = '__all__'
		lookup_field = 'slug'
		depth = 1

class BlogSerializersForViewset(serializers.ModelSerializer):
	class Meta:
		model = Blog
		fields = ['id','author', 'category', 'title', 'desc'] #'__all__'
		lookup_field = 'slug'





