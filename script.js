// request to the server
fetch('http://127.0.0.1:8000/api/quotes/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
