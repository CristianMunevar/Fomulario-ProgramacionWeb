<?php
$enlace = mysqli_connect("127.0.0.1", "root", "1234", "web");

$name = $_POST['name'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$cardtype = $_POST['cardtype'];
$nameholder = $_POST['nameholder'];
$numbercard = $_POST['numbercard'];
$cvv = $_POST['cvv'];
$month = $_POST['month'];
$year = $_POST['year'];
$address = $_POST['address'];
$city = $_POST['city'];
$department = $_POST['department'];
$postal = $_POST['postal'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$codigo = $_POST['codigo'];

$sql  = "
INSERT INTO 
data 
(
	id, 
	name, 
	last_name,
	mail, 
	card_type,
	card_holder,
	card_number,
	cvv,
	month,
	year,
	address,
	city,
	state,
	zip,
	country,
	phone,
	security_code
)

VALUES 
(
	NULL,
	'".$name."',
	'".$lastName."',
	'".$email."',
	'".$cardtype."',
	'".$nameholder."',
	'".$numbercard."',
	'".$cvv."',
	'".$month."',
	'".$year."',
	'".$address."',
	'".$city."',
	'".$department."',
	'".$postal."',
	'".$country."',
	'".$phone."',
	'".$codigo."'
)";

	$enlace->query($sql);
	$return = $enlace->insert_id;

	if ($return == 0) 
	{
		header("HTTP/1.0 406", true);
		header("Content-Type:application/json", true);
		$return = array('error' => "Don't run process");
		echo json_encode($return);
	}
	else
	{
		header("HTTP/1.0 200", true);
		header("Content-Type:application/json", true);
		$return = array(
			'text' => "Nuevo registro",
			'id' => $return
		);
		echo json_encode($return);
	}

	mysqli_close($enlace);

?>