from rest_framework import serializers
from blog.models import Category, Blog, Comment

class BlogSerializers(serializers.ModelSerializer):
	class Meta:
		model = Blog
		fields = '__all__'
		lookup_field = 'slug'


