<?php
	$connect=new mysqli('localhost', 'root', 'root', 'бд вход на сайт');
	$mail = mysqli_real_escape_string($connect,$_POST['mail']);
	
	$zapros = "SELECT `id` FROM `пользователи` WHERE `mail`='{$mail}' LIMIT 1";
	
	$sql = mysql->query($connect,$zapros) or die(mysqli_error());
    if (mysqli_num_rows($sql)==1)
    {
		$simv = array ("92", "83", "7", "66", "45", "4", "36", "22", "1", "0", "k", "15", "2", "3", "5", "6", "8", "9", "l", "m", "n", "o", "p", "q", "1r", "3s", "a", "b", "c", "d", "5e", "f", "g", "h", "i", "j6", "t", "u", "v9", "w", "x5", "6y", "z5", "dd", "lf");
      	for ($k = 0; $k < 8; $k++)
        {
          shuffle ($simv);
          $string = $string.$simv[1];
 
        }
	$zapros = "UPDATE `пользователи` SET  `pass`='{$string}' WHERE `mail`='{$mail}' ";
	$sql = mysqli_query($connect,$zapros) or die(mysqli_error());
	
	$zapros = "SELECT `mail` FROM `пользователи` WHERE `mail`='{$mail}' LIMIT 1";
	$sql = mysqli_query($connect,$zapros) or die(mysqli_error());
	$r = mysqli_fetch_assoc($sql);
	$mail = $r['mail'];
	mail($mail, "Запрос на восстановление пароля", "Hello! Your new password: $string");
	}
	echo "На ваш почтовый ящик было отправлено письмо с новый паролем";
?>