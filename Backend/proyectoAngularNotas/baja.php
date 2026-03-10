<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

// Validamos que el ID llegue por la URL
if (!isset($_GET['id'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "No se ha proporcionado el ID de la nota"
    ]);
    exit;
}

$id = intval($_GET['id']);

// Ejecutamos el borrado
$sql = "DELETE FROM notas WHERE id = $id";

if (mysqli_query($con, $sql)) {
    echo json_encode([
        "resultado" => "OK",
        "mensaje" => "Nota eliminada con éxito"
    ]);
} else {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Error al eliminar: " . mysqli_error($con)
    ]);
}
?>