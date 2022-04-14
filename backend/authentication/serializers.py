from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
    
    # overwrite create for set password 
    def create(self, validated_data):
        user = super(RegisterUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user