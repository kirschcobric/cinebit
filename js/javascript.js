/* Esta funcion busca una pelicula y muestra el logo de esta*/


function buscarPelicula(){
	
	swal({
	  text: 'Bienvenido a StarFilms',
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
	swal("Como estuvo el servicio y la atencion del cine", {
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
		      swal("nuestros clientes son lo mejor de nosotros","seguiremos mejorando","success");
		      break;
		 
		    case "normal":
		      swal("normal", "ayudanos a mejor dando tu opinion en sugerencias", "success");
		      break;
		 
		    default:
		      swal("porfavor llena el formulario de reclamos para solucionar los inconvenientes presentados en tu estadia");
		  }
		});
}

function ingresar(){
	swal({  
		  title: "Bienvinido a StarFilms",
		  text: "usuario",
		  content: "input",
	     })
	     .then((value) => {
	      swal("Bienvenod@", value, "success");
	     });
}

