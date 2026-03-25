const contenedor = document.getElementById('peliculas')
const buscador = document.getElementById('buscador')
const url = 'https://ghibliapi.vercel.app/films'

let peliculas = []

function cargarPeliculas() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            peliculas = datos
            contenedor.innerHTML = ""
            datos.forEach(pelicula => {
                contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}">
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <p><strong>Director:</strong> ${pelicula.director}</p>
                            <p><strong>Año:</strong> ${pelicula.release_date}</p>
                            <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                        </div>
                    </div>
                </div>
                `
            })
        })
}

buscador.addEventListener('input', () => {
    const texto = buscador.value.toLowerCase()
    const filtradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(texto)
    )

    contenedor.innerHTML = ""
    filtradas.forEach(pelicula => {
        contenedor.innerHTML += `
        <div class="col-md-4">
            <div class="card">
                <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.title}</h5>
                    <p><strong>Director:</strong> ${pelicula.director}</p>
                    <p><strong>Año:</strong> ${pelicula.release_date}</p>
                    <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                </div>
            </div>
        </div>
        `
    })
})

cargarPeliculas()