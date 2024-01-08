<?php
    include('../Models/listProject.php');
    $lp = new listProjects;
    $ods = $_GET['ods'];
    $lp ->listAllDataFromODS($ods)
?>