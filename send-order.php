<?
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$product_name = $_POST['product_name'];
$price = $_POST['price'];
$phone = $_POST['phone'];
$address = $_POST['address'];


// Формирование самого письма
$title = "Сообщение с сайта Доставка роллов";
$body = "
<h2>Новый заказ</h2>
<b>Имя:</b> $product_name <br>
<b>Почта:</b> $price<br><br>
<b>Телефон:</b><br>$phone
<b>Адрес:</b><br>$address
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = 'dron555'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom(''); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>
<?/*header("Content-Type: text/html; charset=utf-8");?>
<?
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";
$headers .= "From: Тестовое письмо <no-reply@test.com>\r\n";
$text="";

foreach($_POST as $key=>$val) {
$queryString = str_replace(array('_','','—'), ' ', trim($key));
$queryString=preg_replace('/\s+/','  ', $queryString);
$text=$text."  ".$queryString." : <b>".$val."</b>  "."<br>"."<br>";
};
$title = 'СантехМир';
$to='zakaz-opt@santehmir.ru,timokhindialweb@gmail.com';
if (mail($to, $title, $text, $headers))
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>
<?/*require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");?>


$mailFields = array(
    'USER_NAME_CALLBACK'=>($_REQUEST['USER_NAME_CALLBACK']),
    'EMAIL_CALLBACK'=>($_REQUEST['EMAIL_CALLBACK']),
    'PHONE_CALLBACK'=>($_REQUEST['PHONE_CALLBACK'])
);


CEvent::Send('LANDING_CALLBACK_TYPE', 's1' , $mailFields, 'N', 337);
CEvent::Send('LANDING_ORDER_TYPE', 's1' , $mailFields, 'N', 339);
*/?>