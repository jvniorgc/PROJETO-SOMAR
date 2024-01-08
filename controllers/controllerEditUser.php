<?php
include('../Models/editUser.php');
$Ed = new EditUser;
$Ed -> id = $_GET['id'];
$Ed -> name = $_GET['name'];
$Ed -> email = $_GET['email'];
$Ed -> cpf = $_GET['cpf'];
$Ed -> password = $_GET['password'];
$Ed -> office = $_GET['office'];
$Ed->editUser();
?>