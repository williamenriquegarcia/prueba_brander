var tabla=document.getElementById("tabla");
var formulario=document.getElementById("formulario");
var tipoDocumento=document.getElementById("tipoDocumento");
var numeroIdentificacion=document.getElementById("numeroIdentificacion");
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var arrayTabla=[];
var enviar=document.getElementById("enviar");


$("#enviar").click(function(){
	
	crear();
	

})


function crear() {
	arrayTabla[arrayTabla.push([tipoDocumento.value,numeroIdentificacion.value,nombre.value,apellido.value])]
	recorrerTabla();
}


function recorrerTabla() 
{
	tabla.innerHTML="<table class='table table-dark'>";
	
	for (var i = 0; i < arrayTabla.length; i++) 
	{
		tabla.innerHTML=tabla.innerHTML+("<tr id='"+i+"'><td>"+arrayTabla[i][0]+"</td><td>"+arrayTabla[i][1]+"</td><td>"+arrayTabla[i][2]+"</td><td>"+arrayTabla[i][3]+"</td>");
		tabla.innerHTML=tabla.innerHTML+"<td><button onclick='modificar("+i+")'>modificar</button></td><td><button onclick='eliminar("+i+")'>eliminar</button></td></tr>";
	}
}




function eliminar(indice) 
{
	arrayTabla.splice(indice,1);
	recorrerTabla();
}


function modificar(indice) 
{
	document.getElementById(indice).innerHTML="<td><select id='nuevoTipo'><option value='cedula'>cedula</option><option value='pasaporte'>pasaporte</option><option value='registro'>registro</option></select></td><td><input id='nuevoNombre'type='text' placeholder='escribe el nuevo nombre'></td>"+"<td><input id='nuevoApellido'type='text' placeholder='escribe el nuevo apellido'></td>"+"<td><input id='nuevoDocumento'type='text' placeholder='escribe el nuevo documento'></td>"+"<button id='nuevoEnviar' onclick='nuevoCrear("+indice+")'>enviar</button>";
}


$("#nuevoEnviar").click(function(){
	
	nuevoCrear();
	

})

function nuevoCrear(i) {
	arrayTabla[i]=[nuevoTipo.value,nuevoDocumento.value,nuevoNombre.value,nuevoApellido.value];
	recorrerTabla();
}

