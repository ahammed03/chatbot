from django.shortcuts import render
from django.http import JsonResponse
import google.generativeai as genai
import os
GOOGLE_API_KEY = os.getenv('API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')


# Create your views here.



def GoogleApiCall(userMsg):
    response = model.generate_content(userMsg)
    return response.text

def index(request):
    return render(request, 'index.html')

def chat(request):
    return render(request,'chat.html')

def GeminiAi(request):

    if request.method == 'POST':
        data = request.body.decode('utf-8') 
        # print("Received data:", data)
        response = GoogleApiCall(data)
        return JsonResponse({"message":response})
    return JsonResponse("Invalid")