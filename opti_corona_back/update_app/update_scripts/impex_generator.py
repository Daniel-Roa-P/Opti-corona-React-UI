import csv 
from django.http import HttpResponse 

def generate_impex(data): 

    response = HttpResponse(content_type='text/csv') 
    response['Content-Disposition'] = 'attachment'

    writer = csv.writer(response, delimiter=';') 

    data_serializada = {}

    for objeto in data:

        data_serializada[[*objeto.keys()][0]] = [*objeto.values()][0]    

    atributos = [*data_serializada.keys()] 

    print(atributos)

    writer.writerow(atributos) 

    """ for book in books: 

        writer.writerow([book.title, book.author, book.publication_year])   """

    return response 