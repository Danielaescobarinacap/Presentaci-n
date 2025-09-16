<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre   = htmlspecialchars($_POST["nombre"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $correo   = htmlspecialchars($_POST["correo"]);

    $destinatario = "TU_CORREO@ejemplo.com"; // ⚠️ cámbialo
    $asunto = "Nuevo mensaje de contacto desde tu web";
    $mensaje = "Has recibido un nuevo mensaje:\n\n".
               "Nombre: $nombre\n".
               "Teléfono: $telefono\n".
               "Correo: $correo\n";

    $headers = "From: no-reply@tusitio.com\r\n".
               "Reply-To: $correo\r\n".
               "X-Mailer: PHP/" . phpversion();

    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "<h2>Gracias $nombre, tu mensaje ha sido enviado correctamente.</h2>";
    } else {
        echo "<h2>Lo sentimos, hubo un error al enviar tu mensaje.</h2>";
    }
}
?>
