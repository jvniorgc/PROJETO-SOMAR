<?php
 include('../Models/listProject.php');
 $lp = new listProjects;
 $cause = $_GET['cause'];
 $lp ->listAllProjectsFromCause($cause)
?>