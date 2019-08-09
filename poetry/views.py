from django.shortcuts import render, redirect, HttpResponse


# Create your views here.
def into(request):
    return render(request, '进入页面.html')


def index(request):
    return render(request,'首页.html')


def test(request):
    return render(request,'后台网页.html')
