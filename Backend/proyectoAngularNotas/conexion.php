<?php
function retornarConexion() {
    $con=mysqli_connect("localhost","root","Ciclo2gs","notas_app");
    return $con;
}
?>