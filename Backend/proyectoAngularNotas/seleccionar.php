<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

if (!isset($_GET['id'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Parámetro 'id' faltante"
    ]);
    exit;
}

$id = intval($_GET['id']);

// Seleccionamos los campos de la tabla 'notas'
$sql = "SELECT id, titulo, contenido, etiqueta_id FROM notas WHERE id = $id";
$registros = mysqli_query($con, $sql);

if (!$registros) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => mysqli_error($con)
    ]);
    exit;
}

$vec = [];
if ($reg = mysqli_fetch_assoc($registros)) {
    $vec[] = $reg;
}

echo json_encode($vec);
?>