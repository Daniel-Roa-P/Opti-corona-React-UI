# Create your views here.
import json
from .update_scripts.impex_generator import generate_impex
from django.http import JsonResponse

def update_impex(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        data = json.loads(request.body)

        #generate_impex(data)

        #response = []
        #return JsonResponse(response, safe=False)
        return generate_impex(data)