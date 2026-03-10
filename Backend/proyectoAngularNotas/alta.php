<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json, true);

require("conexion.php");
$con = retornarConexion();

// IMPORTANTE: Aquí validamos 'titulo' porque es lo que envía notaModel
if (!isset($params['titulo']) || strlen(trim($params['titulo'])) === 0) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "El título de la nota no puede estar vacío"
    ]);
    exit;
}

$titulo = mysqli_real_escape_string($con, $params['titulo']);
$contenido = mysqli_real_escape_string($con, $params['contenido']);
$etiqueta_id = intval($params['etiqueta_id']);

// Insertamos en la tabla notas
$sql = "INSERT INTO notas (titulo, contenido, etiqueta_id) VALUES ('$titulo', '$contenido', $etiqueta_id)";

if (mysqli_query($con, $sql)) {
    echo json_encode(["resultado" => "OK", "mensaje" => "Nota guardada"]);
} else {
    echo json_encode(["resultado" => "ERROR", "mensaje" => mysqli_error($con)]);
}
?>