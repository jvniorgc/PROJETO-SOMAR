<?php
include('../Models/InserirNovoProjeto.php');
$INP = new dadosProjetos;
$INP->nomeProjeto = $_POST['nomeProjeto'];
$INP->estadoProjeto = $_POST['estadoProjeto'];
$INP->cidadeProjeto = $_POST['cidadeProjeto'];
$INP->descricaoProjeto = $_POST['descricaoProjeto'];
$INP->objetivoProjeto = $_POST['objetivoProjeto'];
$INP->idCriador = $_POST['idCriador'];
$INP->opOds = json_decode($_POST['opcaoOds']);
$INP->partiner = json_decode($_POST['opcaoPatrocinador']);
$INP->inserirProjeto();
?>