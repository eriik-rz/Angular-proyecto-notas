<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

$sql = "SELECT id, nombre FROM etiquetas";
$registros = mysqli_query($con, $sql);

$vec = [];
while ($reg = mysqli_fetch_assoc($registros)) {
    $vec[] = $reg;
}

echo json_encode($vec);
?>