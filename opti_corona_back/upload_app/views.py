import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .upload_scripts.Image import Images
from .upload_scripts.Document import Document
from .upload_scripts.Blueprints import Blueprints
from .upload_scripts.Rfa import Rfa
from .upload_scripts.Videos import Videos

def hello(request):

    return HttpResponse("<h1>Hello world upload App</h1>")

def about(request):

    username = 'un pendejo enamorado ciegamente :c'
    return render(request, 'about.html', {

        'username':username

    })

def upload_asset(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        data = json.loads(request.body)

        asset = idenfy_asset(data)
        #asset = idenfy_asset(,data[1]['SKU'], data[2]['Nombre_archivo'], data[3]['manual'])

        response = []
        response.append(asset.create_automatic_matrix())
        response.append(asset.generate_report())
        return JsonResponse(response, safe=False)
    
def idenfy_asset(data): 

    uploadType = data[0]['uploadType']

    if(uploadType == "images"):

        return Images(data)

    elif(uploadType == "docs"):

        return Document(data)
    
    elif(uploadType == "blueprints"):

        return Blueprints(data)
    
    elif(uploadType == "rfa"):

        return Rfa(data)
    
    elif(uploadType == "videos"):

        return Videos(data)