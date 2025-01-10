<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "thiagoelias99@gmail.com";
  $subject = "Contato do site";
  $email_message = "Nome: $nome\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Mensagem:\n$mensagem";

  // Cabeçalhos
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Enviar o email
  if (mail($to, $subject, $email_message, $headers)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.";
  }
}
