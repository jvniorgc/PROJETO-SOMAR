<?php
    include('../Models/listUsers.php');
    $lp = new listUsers;
    $company = $_GET['company'];
    $lp ->listAllUsers($company)
?>