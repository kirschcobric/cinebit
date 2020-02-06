/* Esta funcion busca una pelicula y muestra el logo de esta*/


/* Esta funcion busca una pelicula y muestra el logo de esta*/
function buscarPelicula(){	
	swal({
	  title:"Bienvenido a StarFilms",
	  content: "input",
	  dangerMode: {	
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
	    return swal("Actualmente no esta en cartelera!");
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

function servicio(){
	swal({
		title: "Como estuvo el servicio y la atencion del cine",
		buttons: {
		cancel: "pesimo",
		catch: {
		   text: "normal",
		   value: "normal",
		 },
	    excelente: true,
		  },
		})
		.then((value) => {
		  switch (value) {
		 
		    case "excelente":
		      swal("nuestros clientes son lo mejor de nosotros","seguiremos mejorando","../../bictia/encabezado/img/feliz.png");
		      break;
		 
		    case "normal":
		      swal("ayudanos a mejor", " dando tu opinion en sugerencias", "../../bictia/encabezado/img/carita-normal.png");
		      break;
		 
		    default:
		      swal("Sentimos las molestias","Porfavor llene el formulario de quejas","../../bictia/encabezado/img/carita-reclamo.jpeg");
		  }
		});
}


function ingresar(Nombre, Password){
	var nombreUsuario = document.getElementById('formGroupExampleInput').value;
	var usuarioPassword = document.getElementById('formGroupExampleInput2').value;
	localStorage.setItem(nombreUsuario, usuarioPassword);
	if(usuarioPassword == "bictia" && localStorage.length != null){
		document.getElementById('nombreUsuarioCine').innerHTML = nombreUsuario;
		document.getElementById('cerrarSecionCine').style.display = 'block';
		document.getElementById('esconderIngresar').style.display = 'none'; 
		document.getElementById('ingresoFormulario1').style.backgroundColor = "black";

	} else{
		document.getElementById('nombreUsuarioCine').innerHTML = "try again";
	}
}

function cerrarSecion(){
	var nombreUsuario = document.getElementById('formGroupExampleInput').value;
	var usuarioPassword = document.getElementById('formGroupExampleInput2').value;
	localStorage.removeItem(nombreUsuario, usuarioPassword);
	document.getElementById('nombreUsuarioCine').innerHTML = "StarFilms";
	document.getElementById('cerrarSecionCine').style.display = 'none';
	document.getElementById('esconderIngresar').style.display = 'block'; 
	swal("Espero que tu estadia haya sido increible ", "espero tu regreso", "../../bictia/encabezado/img/logo.png");
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