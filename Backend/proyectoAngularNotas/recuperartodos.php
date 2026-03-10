<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

// Hacemos un JOIN para traer el nombre de la etiqueta junto a la nota
$sql = "SELECT n.id, n.titulo, n.contenido, n.etiqueta_id, e.nombre AS nombre_etiqueta 
        FROM notas n 
        LEFT JOIN etiquetas e ON n.etiqueta_id = e.id";

$registros = mysqli_query($con, $sql);
$vec = [];
while ($reg = mysqli_fetch_assoc($registros)) {
    $vec[] = $reg;
}

echo json_encode($vec);
?>