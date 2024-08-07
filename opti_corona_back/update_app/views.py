# Create your views here.
import json
from .update_scripts.attributes_asociation.impex_generator import generate_impex
from .update_scripts.attributes_structure import impex_dictionary
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def generate_update_impex(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        data = json.loads(request.body)
        return generate_impex(data)
    
@csrf_exempt 
def get_classification_list(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        return JsonResponse(impex_dictionary.get_list(), safe=False)

@csrf_exempt 
def get_attributes_list(request):

    if request.method == 'GET':

        print(request)
        return JsonResponse(request)

    else: 

        data = json.loads(request.body)
        #print(impex_dictionary.get_attributes(data[0]))
        return JsonResponse(impex_dictionary.get_attributes(data[0]), safe=False)
    