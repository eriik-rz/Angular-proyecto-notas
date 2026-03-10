<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json, true);

require("conexion.php");
$con = retornarConexion();

// Validación para ETIQUETAS (buscamos 'nombre')
if (!isset($params['nombre']) || strlen(trim($params['nombre'])) === 0) {
    echo json_encode(["resultado" => "ERROR", "mensaje" => "El nombre de la etiqueta es obligatorio"]);
    exit;
}

$nombre = mysqli_real_escape_string($con, $params['nombre']);

$sql = "INSERT INTO etiquetas (nombre) VALUES ('$nombre')";

if (mysqli_query($con, $sql)) {
    echo json_encode(["resultado" => "OK"]);
} else {
    echo json_encode(["resultado" => "ERROR", "mensaje" => mysqli_error($con)]);
}
?>