from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import User

# Create your views here.

def index(request):
    return HttpResponse("<h1>Welcome!</h1> <p>Go to /users to see user information.</p>")

def help(request):
    my_dir = {"variable1": "Help Page!"}
    return render(request, "first_app/help.html", context=my_dir)

def users(request):
    user_list = User.objects.all()
    user_dict = {"user_list": user_list}
    return render(request, "first_app/user_list.html", context=user_dict)