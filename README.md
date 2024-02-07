# Chatbot using GeminiAI

This repository contains a Django-based chatbot project that utilizes the Gemini AI API for a large language model (LLM).

## Installation

To use the chatbot application, you need to have Python and Django installed on your system. Additionally, you'll need to install the `google-generativeai` package using pip.

1. Install Python and Django:
   - Install Python from [python.org](https://www.python.org/)
   - Install Django using pip:
     ```bash
     pip install django
     ```

2. Install the `google-generativeai` package:
   ```bash
   pip install -q -U google-generativeai

3. Google API Key Setup

This repository contains a Django project that utilizes the Google API for various functionalities. To use the Google API services, you need to obtain an API key from the Google Cloud Platform.

## Obtaining the API Key

1. Visit the [ ai.google.dev ](https://ai.google.dev/tutorials/setup) website and sign in with your Google account.

2. Paste your api key in root Directory/api/views.py
   ```bash
   GOOGLE_API_KEY = "your_api_key"


# Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/ahammed03/chatbot.git

2. Navigate to the project directory:
    ```bash
    cd chatbot

3. Run the Django development server:
    ```bash
    python manage.py runserver
