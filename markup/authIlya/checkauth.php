<?php
	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);
	
	$pass = md5($pass."hjsrfbkwafnsnkmx5288402");
	
	$mysql = new mysqli('localhost', 'root', 'root', 'бд вход на сайт');
	
	$result = $mysql->query("SELECT * FROM `пользователи` WHERE `login` = '$login' AND `pass` = '$pass'");
	$user = $result->fetch_assoc();
	if(count($user) == 0){
		echo "Пользователь не найден";
		exit();
	}

	setcookie('user', $user['name'], time() + 3600 * 24 * 7, "/");
	
	$mysql->close();
	
	header('Location: http://localhost/');
?>