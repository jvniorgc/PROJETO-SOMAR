<?php
    include('../Models/listProject.php');
    $lp = new listProjects;
    $id = $_GET['id'];
    $lp ->listAllDataProject($id);
?>