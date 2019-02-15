	<?php

	$id = $_POST ['id'];
	$name = $_POST ['name'];
	$last_name = $_POST ['last_name'];


		$enlace = mysqli_connect("127.0.0.1", "root", "1234", "web");

		$sql  = "
		SELECT  
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
			FROM data
		";

		$result = $enlace -> query($sql);

		$i = 0;

		while ($data = $result -> fetch_assoc()) 
		{
			$arraydata[$i]['name'] = $data['name'];
			$arraydata[$i]['last_name'] = $data['last_name'];
			$arraydata[$i]['mail'] = $data['mail'];
			$arraydata[$i]['card_type'] = $data['card_type'];
			$arraydata[$i]['card_holder'] = $data['card_holder'];
			$arraydata[$i]['card_number'] = $data['card_number'];
			$arraydata[$i]['cvv'] = $data['cvv'];
			$arraydata[$i]['month'] = $data['month'];
			$arraydata[$i]['year'] = $data['year'];
			$arraydata[$i]['address'] = $data['address'];
			$arraydata[$i]['city'] = $data['city'];
			$arraydata[$i]['state'] = $data['state'];
			$arraydata[$i]['zip'] = $data['zip'];
			$arraydata[$i]['country'] = $data['country'];
			$arraydata[$i]['phone'] = $data['phone'];
			$arraydata[$i]['security_code'] = $data['security_code'];
			$i ++;
		}
		
		header("HTTP/1.0 200", true);
		header("Content-Type:application/json", true);
		echo json_encode($arraydata);

		mysqli_close($enlace);
	?>