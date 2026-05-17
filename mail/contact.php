<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


// Configuración SMTP (ajusta según tu proveedor)
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com'; // Reemplaza con el host de tu servidor SMTP
$mail->SMTPAuth = true;
$mail->Username = 'info@acfar42.com'; // Tu dirección de correo
$mail->Password = 'Acfar42.2024';
$mail->SMTPSecure = 'ssl'; // O 'ssl' si tu servidor lo requiere
$mail->Port = 465; // O 465 si usas SSL

// Recibir datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Validación básica
if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Por favor, completa todos los campos.";
    exit();
}

// Configurar el correo
$mail->setFrom($email, $name);
$mail->addAddress('info@acfar42.com'); // Dirección de destino
$mail->Subject = $subject;
$mail->Body = $message;

// Enviar el correo
if (!$mail->send()) {
    echo 'Mensaje no enviado. Error: ' . $mail->ErrorInfo;
} else {
    echo 'Mensaje enviado correctamente.';
}