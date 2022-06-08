<?php
	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);
	$mail = filter_var(trim($_POST['mail']), FILTER_SANITIZE_STRING);
	
	if (mb_strlen($login) < 3 || mb_strlen($login) > 90)
	{
	echo "Недопустимая длина логина";
	exit();
	}	
	else if (mb_strlen($pass) > 3 || mb_strlen($pass) < 32)
	{
	if (!preg_match("/([a-z]+)/", $pass))
	{
	    echo "at least one letter";
	    exit();
	}
	if (!preg_match("/([A-Z]+)/", $pass))
	{
	    echo "at least one LETTER";
	    exit();
	}
	if (!preg_match("/([0-9]+)/", $pass))
	{
	    echo "at least one 123";
	    exit();
	}
	}
	else
	{
	echo "Недопустимая длина пароль";
	exit();
	}
	else if (mb_strlen($mail) > 5 || mb_strlen($mail) < 50)
	{
	if (!(preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i", $mail)))
	{
	    echo "incorrect email";
	    exit();
	}
	}
	else
	{
	echo "Недопустимая длина почты";
	exit();
	}

	$pass = md5($pass . "hjsrfbkwafnsnkmx5288402");
	$hash = md5($login . time());
	
	//Отправляем письмо на почту для подтверждения регистрации
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "To: <$mail>\r\n";
	$headers .= "From: <mail@example.com>\r\n";
	$message = '
	    <html>
	    <head>
	    <title>Подтвердите Email</title>
	    </head>
	    <body>
	    <p>Что бы подтвердить Email, перейдите по <a href="http://example.com/confirmed.php?hash=' . $hash . '">ссылке</a></p>
	    </body>
	    </html>
	    ';
    
     //Вносим в БД
	$mysql = new mysqli('localhost', 'root', 'root', 'бд вход на сайт');
	$mysql->query("INSERT INTO `пользователи` (`login`, `pass`, `mail`, `hash`, `email_confirmed`) VALUES('$login', '$pass', '$mail', '$hash', '1')");
	
	if (mail($mail, "Подтвердите Email на сайте", $message, $headers)) {
		echo 'Подтвердите на почте';
	} else {
		echo 'Произошла ошибка, попробуйте ещё'; 
	}
    
	//Проверяем EMAIL на подтверждение
	if ($_GET['hash']) {
		$hash = $_GET['hash'];
		if ($result = $mysql->query("SELECT `id`, `email_confirmed` FROM `пользователи` WHERE `hash`='" . $hash . "'")) {
	    	while( $row = mysqli_fetch_assoc($result) ) { 
	        	echo $row['id'] . " " . $row['email_confirmed'];
	        	if ($row['email_confirmed'] == 1) {
	            	$mysql->query("UPDATE `пользователи` SET `email_confirmed`=0 WHERE `id`=". $row['id'] );
	            	echo "Email подтверждён";
	        	} else {
	            	echo "Что то пошло не так";
	        	}
	    	} 
		} else {
	    echo "Что то пошло не так";
		}
	} else {
	echo "Что то пошло не так";
	}
	
	$mysql->close();

	header('Location: http://localhost/reg.htm');
?>