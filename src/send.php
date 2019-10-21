<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$var = htmlspecialchars(ENT_NOQUOTES);
$fio = htmlspecialchars($fio, $var);
$fio = urldecode($fio);
$fio = trim($fio);
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
$message = htmlspecialchars($message, $var);
$message = urldecode($message);
$phone = htmlspecialchars($phone, $var);
$phone = urldecode($phone);
$phone = trim($phone);
$subject = "Заявка с сайта:";
$myemail = "gerantev@ukefir.ru";
/*$from  = "From: $fio <$email> \r\n Reply-To: $email \r\n";*/
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}*/
$mes = '
<table style="border: 2px solid #333333; border-collapse: collapse;">
    <tr>
        <th style="border: 2px solid #333333; padding: 15px; font-size: 1.4em; width: 25%;">ФИО, Компания</th>
        <th style="border: 2px solid #333333; padding: 15px; font-size: 1.4em; width: 25%;">E-mail</th>
        <th style="border: 2px solid #333333; padding: 15px; font-size: 1.4em; width: 25%;">Сообщение</th>
        <th style="border: 2px solid #333333; padding: 15px; font-size: 1.4em; width: 25%;">Телефон</th>
    </tr>
    <tr>
        <td style="padding: 15px; border: 2px solid #333333; text-align: center; font-size: 1.4em;">'.$fio.'</td>
        <td style="padding: 15px; border: 2px solid #333333; text-align: center; font-size: 1.4em;">'.$email.'</td>
        <td style="padding: 15px; border: 2px solid #333333; text-align: justify ; font-size: 1.4em;">'.$message.'</td>
        <td style="padding: 15px; border: 2px solid #333333; text-align: justify ; font-size: 1.4em;">'.$phone.'</td>
    </tr>
</table>
';
$header = "From: $fio <$email> \r\n Reply-To: $email \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";
mail($myemail, $subject, $mes, $header)
/*if (mail($myemail, $subject, $mes, $header))
    {
        echo "сообщение успешно отправлено";
    }
else {
        echo "при отправке сообщения возникли ошибки";
     }*/
?>
