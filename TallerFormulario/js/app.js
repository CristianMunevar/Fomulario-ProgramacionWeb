$("#result").hide();

function send()
{
	var name = $('#name').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var cardtype = $('#cardtype').val();
	var nameholder = $('#nameholder').val();
	var numbercard = $('#numbercard').val();
	var cvv = $('#cvv').val();
	var month = $('#month').val();
	var year = $('#year').val();
	var address = $('#address').val();
	var city = $('#city').val();
	var department = $('#department').val();
	var postal = $('#postal').val();
	var country = $('#country').val();
	var phone = $('#phone').val();
	var codigo = $('#codigo').val();

	//console.log(name+" "+lastName+""+email+""+cardtype+""+nameholder+""+numbercard+""+cvv+""+month+""+year+""+address+""+city+""+department+""+postal+""+country+""+phone+""+codigo+"");

	$.ajax({
	     type: "POST",
	     url:"src/endpoint.php",
	     contentType: "application/x-www-form-urlencoded",
	     processData: true,
	     cache: false,
	     data: "name="+name+"&lastName="+lastName+"&email="+email+"&cardtype="+cardtype+"&nameholder="+nameholder+"&numbercard="+numbercard+"&cvv="+cvv+"&month="+month+"&year="+year+"&address="+address+"&city="+city+"&department="+department+"&postal="+postal+"&country="+country+"&phone="+phone+"&codigo="+codigo,
	     success: function(dataReturn){
	       $("#alert").html("Se creo el registro con el ID #: "+dataReturn.id).show("slow");
	     }
	 });
}