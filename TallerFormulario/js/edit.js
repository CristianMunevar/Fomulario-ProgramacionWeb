var sPageURL = decodeURIComponent(window.location.search.substring(1)),sURLVariables = sPageURL.split('&'),sParameterName;
sParameterName = sURLVariables[0].split('=');
var id = sParameterName[1];
//console.log(sParameterName[1]);

function edit_data()
{	
	$.ajax({
	     type: "POST",
	     url:"endpoint/editendpoint.php",
	     contentType: "application/x-www-form-urlencoded",
	     processData: true,
	     cache: false,
	     data: "id="+id,
	     success: function(dataReturn){

	       //console.log(dataReturn[0].name);
	       
	       $('#name').val(dataReturn[0].name);
	       $('#last_name').val(dataReturn[0].last_name);
	       $('#mail').val(dataReturn[0].mail);
	       $('#card_type').val(dataReturn[0].card_type);
	       $('#card_holder').val(dataReturn[0].card_holder);
	       $('#card_number').val(dataReturn[0].card_number);
	       $('#cvv').val(dataReturn[0].cvv);
	       $('#month').val(dataReturn[0].month);
	       $('#year').val(dataReturn[0].year);
	       $('#address').val(dataReturn[0].address);
	       $('#city').val(dataReturn[0].city);
	       $('#state').val(dataReturn[0].state);
	       $('#zip').val(dataReturn[0].zip);
	       $('#country').val(dataReturn[0].country);
	       $('#phone').val(dataReturn[0].phone);
	       $('#security_code').val(dataReturn[0].security_code);
	       //$("#name").html("<center><b>Se ha creado un nuevo registro con el ID # "+dataReturn.name+"</b></center>").show("slow");	       
	     }
	 }); 
}

function edit_data_sp()
{

	var name = $('#name').val();
	var last_name = $('#last_name').val();
	var mail = $('#mail').val();
	var card_type = $('#card_type').val();
	var card_holder = $('#card_holder').val();
	var card_number = $('#card_number').val();
	var cvv = $('#cvv').val();
	var select_month = $('#select_month').val();
	var select_year = $('#select_year').val();
	var address = $('#address').val();
	var city = $('#city').val();
	var select_state = $('#select_state').val();
	var zip = $('#zip').val();
	var select_country = $('#select_country').val();
	var phone = $('#phone').val();
	var security_code = $('#security_code').val();

	//console.log(name+" "+last_name+" "+mail+" "+card_type+" "+card_holder+" "+card_number+" "+cvv+" "+select_month+" "+select_year+" "+address+" "+city+" "+select_state+" "+zip+" "+select_country+" "+phone+" "+security_code)

	$.ajax({
	     type: "POST",
	     url:"endpoint/edit_endpoint.php",
	     contentType: "application/x-www-form-urlencoded",
	     processData: true,
	     cache: false,
	     data: "name="+name+
	     	   "&last_name="+last_name+
	     	   "&mail="+mail+
	     	   "&card_type="+card_type+
	     	   "&card_holder="+card_holder+
	     	   "&card_number="+card_number+
	     	   "&cvv="+cvv+
	     	   "&select_month="+select_month+
	     	   "&select_year="+select_year+
	     	   "&address="+address+
	     	   "&city="+city+
	     	   "&select_state="+select_state+
	     	   "&zip="+zip+
	     	   "&select_country="+select_country+
	     	   "&phone="+phone+
	     	   "&security_code="+security_code,
	     success: function(dataReturn){
	       
	       $("#result").html("<center><b>Se ha editado el usuario ID # "+dataReturn.id+"</b></center>").show("slow");
	     }
	 });
}
