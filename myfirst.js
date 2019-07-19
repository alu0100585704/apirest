/*	 

    var x = {valor :" hola"};
	var h = x;


     h.valor="adios";
    console.log(x.valor);
    var persona={
			"nombre"  : "hola",
			"apellido" : "adios"
        };
	//	var personas = [
	//	  {			"nombre"  : "hola",
	//		"apellido" : "adios"
	//	},
//		{			"nombre"  : "hola",
	//		"apellido" : "adios"
	//	},
//		{			"nombre"  : "hola",
//			"apellido" : "adios"
	//	},
	//	{			"nombre"  : "hola",
		//	"apellido" : "adios"
	//	}
	//	];

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
			var respuesta = JSON.parse(xhttp.responseText);
			//console.log(personas[0].nombre);
			var personas = respuesta.personas;
			console.log(personas);
				var salida = '';

       for(var i=0; i< personas.length ;i++)
		{
		salida+= '<li>'+ personas[i].apellido + '</li>';
		}
				document.getElementById('personas').innerHTML = salida;
				//document.getElementById("personas").innerHTML = xhttp.responseText;

	}

			};

xhttp.open("GET", "personas.json", true);
xhttp.send();

	//	var salida = '';

    //    for(var i=0; i< personas.length ;i++)
	//	{
	//	console.log(personas[i]);
	//	salida+= '<li>'+ personas[i].apellido + '</li>';
	//	}

	//	document.getElementById('personas').innerHTML = salida;
		
    */