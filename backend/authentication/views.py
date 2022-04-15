from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from authentication.serializers import RegisterUserSerializer
from django.contrib.auth.models import User
from rest_framework.generics import RetrieveAPIView

# Create your views here.

# new user creation view 
class UserCreateView(APIView):
    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_200_BAD_REQUEST)
    
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)

# class UserView(RetrieveAPIView):
#     model = User
#     serializer_class = RegisterUserSerializer

#     def retrieve(self, request, pk=None):
#         """
#         If provided 'pk' is "me" then return the current user.
#         """
#         if request.user and pk == 'me':
#             return Response(UserSerializer(request.user).data)
#         return super(UserView, self).retrieve(request, pk)