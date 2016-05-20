var fecha = new Date();
$(function(){
	mostrarHora();
	setInterval(mostrarHora, 1000);
	$(".region").on("click",horaRegion)
 })

function mostrarHora(){
//Hora local 
 

 var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles',
 			 'Jueves', 'Viernes', 'Sábado'];
 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 			 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

 var segundos=fecha.getSeconds()
 	if(segundos<10)
 		segundos="0"+segundos
 var minutos=fecha.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 var horas=fecha.getHours()
 	if(horas<10)
 		horas="0"+horas

 $("#hora").html(horas+":"+minutos+":"+segundos)
 $("#dia").html(semana[fecha.getDay()]+", ")
 $("#fecha").html(fecha.getDate()+" de "+meses[fecha.getMonth()])
 
	}

function horaRegion(){
	//Hora Regiones

 var regiones=[{region:"México DC",
				diferencia:0},
			   {region:"Sao Paulo",
				diferencia:2},
			   {region:"Washington DC",
				diferencia:-1},
			   {region:"Madrid",
				diferencia:7},
			   {region:"Seúl",
				diferencia:14},
			   {region:"Toronto",
				diferencia:1},
			   {region:"Bogotá",
				diferencia:0},
			   {region:"Caracas",
				diferencia:1}]
				
	var checked=this.checked
	var index=parseInt(this.value)
	if(checked){
		hora=fecha.getHours()+regiones[index].diferencia
 		if(hora>=24)
 			hora=hora-24
 		if(hora<10)
 		hora="0"+hora
		minutos=fecha.getMinutes()
		if(minutos<10)
 		minutos="0"+minutos
		segundos=fecha.getSeconds()
		if(segundos<10)
 		segundos="0"+segundos
		$("#otros").append("<div class='row"+index+"'><div class='col-xs-6'><span class='ciudad'>"+regiones[index].region+"</span></div><div class='col-xs-6'><span class='hora-ciudad'>"+hora+":"+minutos+":"+segundos+"</span></div></div>")
	}
	else $(".row"+index).remove()
}