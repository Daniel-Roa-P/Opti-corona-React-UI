import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .upload_scripts.gallery_csv_IN_cleaing_folder import Images

# Create your views here.
def hello(request):

    return HttpResponse("<h1>Hello world upload App</h1>")

def about(request):

    username = 'un pendejo enamorado ciegamente :c'
    return render(request, 'about.html', {

        'username':username

    })

def upload_images(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        data = json.loads(request.body)

        images = Images()

        matrix = images.upload_images(data[0]['SKU'], data[1]['Nombre archivo'], False)

        print(matrix)

        return JsonResponse(data, safe=False)