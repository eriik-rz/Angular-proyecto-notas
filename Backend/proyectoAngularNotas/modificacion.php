<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

// Recibimos el JSON del frontend de Angular
$json = file_get_contents('php://input');
$params = json_decode($json, true);

require("conexion.php");
$con = retornarConexion();

// Validamos que lleguen los campos necesarios para una nota
if (!isset($params['id'], $params['titulo'], $params['etiqueta_id'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Faltan campos obligatorios (id, titulo o etiqueta_id)"
    ]);
    exit;
}

// Limpiamos y asignamos variables
$id = intval($params['id']);
$titulo = mysqli_real_escape_string($con, $params['titulo']);
$contenido = mysqli_real_escape_string($con, $params['contenido']);
$etiqueta_id = intval($params['etiqueta_id']);

// Ejecutamos la actualización en la tabla 'notas'
$sql = "UPDATE notas 
        SET titulo = '$titulo', 
            contenido = '$contenido', 
            etiqueta_id = $etiqueta_id
        WHERE id = $id";

if (mysqli_query($con, $sql)) {
    echo json_encode([
        "resultado" => "OK",
        "mensaje" => "Nota actualizada correctamente"
    ]);
} else {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Error en la base de datos: " . mysqli_error($con)
    ]);
}
?>