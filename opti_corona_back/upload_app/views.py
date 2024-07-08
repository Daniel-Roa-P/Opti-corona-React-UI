import json
from django.http import JsonResponse
from .upload_scripts.Assets_asociation.Image import Images
from .upload_scripts.Assets_asociation.Document import Document
from .upload_scripts.Assets_asociation.Blueprints import Blueprints
from .upload_scripts.Assets_asociation.Rfa import Rfa
from .upload_scripts.Assets_asociation.Videos import Videos
from .upload_scripts.Assets_asociation.Prices import Prices
from .upload_scripts.Assets_structure.asset_dictionary import get_list , get_structure

def upload_asset(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(json.loads(request.body))

    else: 

        data = json.loads(request.body)

        asset = idenfy_asset(data)

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
    
    elif(uploadType == "prices"):

        return Prices(data)
    
def get_assets_list(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(json.loads(request.body))

    else: 

        return JsonResponse(get_list(), safe=False)
    
def get_asset_structure(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(json.loads(request.body))

    else: 

        data = json.loads(request.body)

        return JsonResponse(get_structure(data[0], data[1]), safe=False)