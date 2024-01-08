<?php
include('../Models/editProject.php');
$Ed = new EditProjec;
$id = $_POST['idProjeto'];
$Ed -> idProject = $id;
$Ed -> nameProject = $_POST['nomeProjeto'];
$Ed -> cityProject = $_POST['cidadeProjeto'];
$Ed -> descriptionProject = $_POST['descricaoProjeto'];
$Ed -> objectProject = $_POST['objetivoProjeto'];
$Ed -> optionsOds = json_decode($_POST['opcaoOds']);
$Ed -> optionsPartiners = json_decode($_POST['opcaoPatrocinador']);
$Ed->editProject();
?>