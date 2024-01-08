<?php
include('../Models/insertUser.php');
$Dp = new dataUsers;
$Dp->name = $_POST['nome'];
$Dp->email = $_POST['email'];
$Dp->cpf = $_POST['cpf'];
$Dp->password = $_POST['senha'];
$Dp->position = $_POST['cargo'];
$Dp->company = $_POST['empresa'];
$Dp->insertUser();
?>