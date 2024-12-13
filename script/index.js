const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayAPOD(data);
    })
    .catch(error => console.error('Error al obtener los datos:', error));

function displayAPOD(data) {
    const headerElement = document.querySelector('.header');
    
    if (data.media_type === "image") {
        headerElement.style.backgroundImage = `url(${data.url})`;
    } else if (data.media_type === "video") {
        headerElement.innerHTML = `
            <iframe src="${data.url}" frameborder="0" allowfullscreen style="width: 100%; height: 500px;"></iframe>
        `;
    } else {
        return null;
    }
}
