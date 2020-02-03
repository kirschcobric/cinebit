/* Esta funcion busca una pelicula y muestra el logo de esta*/


function buscarPelicula() {

    swal({
            text: 'Busca tu película:',
            content: "input",
            button: {
                text: "Search!",
                closeModal: false,
            },
        })
        .then(name => {
            if (!name) throw null;

            return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
        })
        .then(results => {
            return results.json();
        })
        .then(json => {
            const movie = json.results[0];

            if (!movie) {
                return swal("Actualmente no está en cartelera!");
            }

            const name = movie.trackName;
            const imageURL = movie.artworkUrl100;

            swal({
                title: "StarFilms",
                text: name,
                icon: imageURL,
            });
        })
        .catch(err => {
            if (err) {
                swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
                swal.stopLoading();
                swal.close();
            }
        });
}

/* este codigo es para evaluar el servicio que se presta a nuestros usuarios  */

function servicio() {
    swal("¿Cómo encuentras el servício y la atención de nuestros cines?", {
            buttons: {
                cancel: "Pésimo",
                catch: {
                    text: "Normal",
                    value: "Normal",
                },
                Excelente: true,
            },
        })
        .then((value) => {
            switch (value) {

                case "Excelente":
                    swal("Nuestros clientes son lo mejor de nosotros", "¡Seguiremos mejorando!", "success");
                    break;

                case "Normal":
                    swal("Normal", "Ayudanos a mejorar dando tu opinión en sugerencias", "success");
                    break;

                default:
                    swal("Por favor, llena el formulario de reclamos para solucionar los inconvenientes presentados en nuestro servício");
            }
        });
}

function ingresar() {
    swal({
            title: "Bienvinido a StarFilms, ingresa tu usuario:",
            content: "input",
        })
        .then((value) => {
            swal("Bienveníd@", value, "success");
        });
}


function printPopUp(disp, id) {
    document.getElementById(id).style.display = disp
}