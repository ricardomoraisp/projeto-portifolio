<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = $_POST['celular'];
    $mensagem = addslashes($_POST['mensagem']);

    $para = "ricardopistorim@gmail.com";
    $assunto = "Contato";

    $corpo = "Nome: ".$nome."\n"."E-mail:".$email."\n"."Celular:".$celular."\n"."Mensagem:".$mesagem;

    $cabeca = "From: ricardompistori@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail Enviado Com Sucesso!");
    }else{
        echo("Houve Um Erro ao Enviar o E-mail!")
    }


?>