<?php
include('../Models/insertProject.php');
$Dp = new dataProjects;
$Dp->nameProject = $_POST['nomeProjeto'];
$Dp->stateProject = $_POST['estadoProjeto'];
$Dp->cityProject = $_POST['cidadeProjeto'];
$Dp->descriptionProject = $_POST['descricaoProjeto'];
$Dp->objectProject = $_POST['objetivoProjeto'];
$Dp->idCreator = $_POST['idCriador'];
$Dp->optionsOds = json_decode($_POST['opcaoOds']);
$Dp->optionsPartiners = json_decode($_POST['opcaoPatrocinador']);
$Dp->insertProject();
?>