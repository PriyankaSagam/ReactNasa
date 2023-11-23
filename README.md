# Get the API Key:
1.  Go to the NASA API website: https://api.nasa.gov/.
    Look for a "Sign Up" or "Create an Account" option. You'll need to sign up to get your API key.
    Once signed up, follow the instructions to obtain your unique API key.

2. Figure Out the Base URL and Endpoint for an Image Search:
   Explore the NASA API documentation to find the endpoint related to image searches. This information is usually available in the documentation.
   The base URL for the NASA API is often https://api.nasa.gov/ (Replace "https://api.nasa.gov/" and "<Your API Key>" with the 
   actual base URL and your API key when making requests.), and specific endpoints are added to this base URL for different functionalities.
   For image searches, the endpoint might look something like /planetary/apod which stands for Astronomy Picture of the Day.

3. Describe the Response for that Endpoint:
   The response from the API will typically be in JSON format.
   It may include information about the requested image, such as the title, explanation, date, and the URL of the image.
   The status of the request, such as success or failure, may also be included in the response.

   An example response might look like this:

   json code

     { "title":  "Astronomy Picture of the Day",  "date": "2023-11-19",  "explanation":  "This is a fascinating description of the 
     astronomical event.",  "url":  "https://example.com/image.jpg",  "hdurl":  "https://example.com/highres-image.jpg",  
    "media_type":  "image",  "service_version":  "v1", "copyright":  "© NASA"  }  
    In this example, the response provides details about the Astronomy Picture of the Day, including its title, date, explanation, and URLs for the image (standard and high resolution).

    
# API Root:
    https://images-api.nasa.gov
# API Endpoints:
     /search
     /asset/{nasa_id}
     /metadata/{nasa_id}
     /captions/{nasa_id}
     /album/{album_name}the search URL looks like this.
#  baseUrl = https://images-api.nasa.gov

  Determined what and how I wanted the data displayed based on directions given for project

  Mapped out what components and pages were needed

  Created app using npm create vite@latest

  Installed React Router using npm install react-router-dom

  Created components and pages

  Once components and pages are created, created broilerplate code for each using (rfce)

  Imported needed components into App.jsx or wherever they are going to be used
  
  In main.jsx, wrapped Router component around App component

 Here i take 3 components and 3 pages