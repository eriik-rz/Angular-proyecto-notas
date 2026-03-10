<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

$id = intval($_GET['id']);

$sql = "DELETE FROM etiquetas WHERE id = $id";

if (mysqli_query($con, $sql)) {
    echo json_encode(["resultado" => "OK"]);
} else {
    echo json_encode(["resultado" => "ERROR", "mensaje" => "No se puede borrar: etiqueta en uso"]);
}
?>