<?php
if (isset($_POST['your-name'])) {$name = $_POST['your-name'];} 
if (isset($_POST['your-phone'])) {$phone = $_POST['your-phone'];}
$ip = $_SERVER['REMOTE_ADDR'];
  
$address = "beidik.dan@gmail.com";

$mes = "<span style='font-size: 15px; line-height: 18px;'><b>Имя:</b> $name<br><b>Телефон:</b> $phone<br>";

$sub='Заказ кукла LOL';
$emails='info';

if (empty($phone)) 
	{ 
		echo 'error'; 
	} 
else 
	{
		$send = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\nFrom:$emails");
	}
?>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="refresh" content="9; url=index.html">
		<title>Спасибо!</title>
		<meta name="generator">
		<style type="text/css">
			body
				{
					background: url('diamond.jpg') repeat #fff;
					font-family: 'Roboto Slab', serif;
				}
			.main
				{
					text-align: center; font-size: 40px; font-weight: bold; color: #000; margin-top: 150px;
				}
			.check
				{
					font-size: 22px; font-weight: normal; width: 800px; margin: 30px auto;
				}
		</style>
		<script type="text/javascript">
			setTimeout('location.replace("index.html")', 9000);
		</script> 
		<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	</head>
	<body>	
	
	
	
		<div class="main">
			<p>Спасибо! Ваша заявка успешно отправлена!<br>Мы свяжемся с вами в ближайшее время!<br>Вы вернетесь на сайт через 10 секунд</p>
			<p class="check">Пожалуйста, проверьте правильность введенных вами данных и в случае необходимости отправьте заявку повторно</p>
			<p class="check">
				Имя: <span style="font-weight: bold;"><?php echo $name; ?></span><br>
				Телефон: <span style="font-weight: bold;"><?php echo $phone; ?></span><br>
			</p>
		</div>
	</body>
</html>