<?php
include('../Models/login.php');
$Dl = new dataLogin;
$Dl -> cpf = $_POST['cpf'] ;
$Dl -> password = $_POST['senha'];
$Dl ->validateLogin();
?>