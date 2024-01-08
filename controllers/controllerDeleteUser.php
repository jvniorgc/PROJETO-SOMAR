<?php
    include('../Models/deleteUser.php');
    $Dl = new DeleteUser;
    $idU= $_GET['idUser'];
    echo($idU);
    $Dl-> id = $idU;
    $Dl ->deleteUser();
?>