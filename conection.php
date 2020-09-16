<?php
$server = 'localhost';
$user = 'root';
$pass = '';
$database ='foodcalories';

$connect = mysqli_connect($server ,$user ,$pass, $database);

if(!$connect){
    die('error to connect' . mysqli_connect_error());
}
?>
