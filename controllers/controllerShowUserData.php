<?php
    include('../Models/listUsers.php');
    $lp = new listUsers;
    $id = $_GET['id'];
    $lp ->listUserData($id)
?>