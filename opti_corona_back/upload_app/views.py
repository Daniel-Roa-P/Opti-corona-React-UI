import json
from django.http import JsonResponse
from .upload_scripts.Image import Images
from .upload_scripts.Document import Document
from .upload_scripts.Blueprints import Blueprints
from .upload_scripts.Rfa import Rfa
from .upload_scripts.Videos import Videos
from .upload_scripts.Prices import Prices

def upload_asset(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

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