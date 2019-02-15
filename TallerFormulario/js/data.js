	function data()
	{

		$.ajax({
		     type: "POST",
		     url:"src/dataendpoint.php",
		     contentType: "application/x-www-form-urlencoded",
		     processData: true,
		     cache: false,
		     success: function(dataReturn){
		       	//console.log(dataReturn);
		       	var table = '<table class = "table table-hover table-bordered">';
		       	for (var i = dataReturn.length - 1; i >= 0; i--) 
		       	{
		       		//console.log(dataReturn[i].name);
		       		table += '<tr> \
		       		<td>'+dataReturn[i].name+'</td> \
		       		<td>'+dataReturn[i].last_name+'</td> \
		       		<td>'+dataReturn[i].mail+'</td> \
		       		<td>'+dataReturn[i].card_type+'</td> \
		       		<td>'+dataReturn[i].card_holder+'</td> \
		       		<td>'+dataReturn[i].card_number+'</td> \
		       		<td>'+dataReturn[i].cvv+'</td> \
		       		<td>'+dataReturn[i].month+'</td> \
		       		<td>'+dataReturn[i].year+'</td> \
		       		<td>'+dataReturn[i].address+'</td> \
		       		<td>'+dataReturn[i].city+'</td> \
		       		<td>'+dataReturn[i].state+'</td> \
		       		<td>'+dataReturn[i].zip+'</td> \
		       		<td>'+dataReturn[i].country+'</td> \
		       		<td>'+dataReturn[i].phone+'</td> \
		       		<td>'+dataReturn[i].security_code+'</td> \
		       		<td> \
		       		<div class = "dropdown">\
		       		<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
		       		Opciones\
		       		</button>\
		       		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\
		       		<a class="dropdown-item" href= "edituser.html?id='+dataReturn[i].id+'">Editar Usuario</a>\
		       		<a class="dropdown-item" href= ""delete.html?id='+dataReturn[i].id'">Eliminar Usuario</a>\
		       		</div>\
		       		</div>\
		       		</td> \
		       		</tr>'
		       	}
		       	table += '</table>';
		       	$("#data").html(table);
		    }
		 });	
	}
  
