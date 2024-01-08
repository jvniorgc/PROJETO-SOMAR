<?php
    include('../Models/deleteProject.php');
    $Dl = new DeleteProject;
    $idP = $_POST['idProjeto'];
    echo($idP);
    $Dl-> id = $idP;
    $Dl ->deleteProject();
?>