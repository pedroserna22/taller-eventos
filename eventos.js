const divElement = document.querySelector('div');
divElement.addEventListener('click', function(event) {
    if (event.target.id !== 'saludarButton') {
    alert('Holaa! Soy el div');
}
});