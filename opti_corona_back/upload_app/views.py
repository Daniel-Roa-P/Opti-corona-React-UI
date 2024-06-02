import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .upload_scripts.Image import Images
from .upload_scripts.Document import Document



# Create your views here.
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

        asset = idenfy_asset(data[0]['uploadType'],data[1]['SKU'], data[2]['Nombre_archivo'], data[3]['manual'])
        
        response = []
        response.append(asset.create_automatic_matrix())
        response.append(asset.generate_report())
        return JsonResponse(response, safe=False)
    
def idenfy_asset(uploadType, skuList, filesList, manual): 

    if(uploadType == "images"):

        return Images(skuList, filesList, manual)

    elif(uploadType == "docs"):

        return Document(skuList, filesList, manual)