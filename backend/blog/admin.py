from django.contrib import admin
from blog.models import Category, Blog, Comment
# Register your models here.

admin_list = [Category, Blog, Comment]

admin.site.register(admin_list)