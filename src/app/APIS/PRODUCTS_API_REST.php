<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Conexión a la base de datos
    $servername = "localhost";
    $username = "id21845207_master";
    $password = "Ensalada123.";
    $dbname = "id21845207_spaceentapp";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }
    $comando = $_GET['comando'] ?? null;

    switch($comando){
        case "Add":
            $nombre = $_GET['Nombre'] ?? null;
            $descripcion = $_GET['Descripcion'] ?? null;
            $costo = $_GET['Costo'] ?? null;
            $precio = $_GET['Precio'] ?? null;
            $cantidad = $_GET['Cantidad'] ?? null;
            $tipo = $_GET['Tipo'] ?? null;
            $diasvigente = $_GET['Dias_Vigente'] ?? null;
            $tipocuenta = $_GET['Tipo_de_Cuenta'] ?? null;
            $foto = $_GET['Foto']?? null;
            
            if ($nombre && $descripcion && $cantidad && $costo && $precio && $foto && $tipo && $diasvigente && $tipocuenta){
                $sql = "INSERT INTO Servicio_Producto (Nombre, Descripcion, Costo, Precio ,Cantidad,Tipo, Dias_Vigente, Tipo_de_Cuenta, Foto) VALUES ('$nombre', '$descripcion','$costo', '$precio', '$cantidad',  '$tipo','$diasvigente', '$tipocuenta', '$foto')";
                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Servicio agregado correctamente"));
                }
                else {
                    echo json_encode(array("error" => "Faltan parámetros"));
                }
            }
            break;
        case "View":
            $sql = "SELECT * FROM Servicio_Producto"; // Consulta solo los productos
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                $productos = array();
                while ($row = $result->fetch_assoc()) {
                    $productos[] = $row; // Agregar cada producto a la lista de productos
                }
                echo json_encode($productos);
            } else {
                echo json_encode(array("message" => "No se encontraron productos"));
            }
            break;
        case "Update":
            $id = $_GET['Id'] ?? null;
            $nombre = $_GET['Nombre'] ?? null;
            $descripcion = $_GET['Descripcion'] ?? null;
            $cantidad = $_GET['Cantidad'] ?? null;
            $preciocosto = $_GET['PrecioCosto'] ?? null;
            $precioventa = $_GET['PrecioVenta'] ?? null;
            $fotografia = $_GET['Fotografia'] ?? null;

            if ($nombre && $descripcion && $cantidad && $preciocosto && $precioventa && $fotografia) {
                $sql = "UPDATE Servicio_Producto SET Nombre='$nombre', Descripcion='$descripcion', Cantidad='$cantidad', PrecioCosto='$preciocosto', PrecioVenta='$precioventa', Fotografia='$fotografia' WHERE Id=$id";

                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Producto actualizado correctamente"));
                } else {
                    echo json_encode(array("error" => "Error al actualizar usuario: " . $conn->error));
                }
            } else {
                echo json_encode(array("error" => "Faltan parámetros"));
            }
            break;
        case "Delete":
            $id = $_GET['Id'] ?? null;

            if ($id) {
                $sql = "DELETE FROM Servicio_Producto WHERE Id=$id";

                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Producto Eliminado correctamente"));
                } else {
                    echo json_encode(array("error" => "Error al actualizar usuario: " . $conn->error));
                }
            } else {
                echo json_encode(array("error" => "Faltan parámetros"));
            }
            break;
        default:
                echo json_encode(array("error" => "Comando no reconocido"));
            break;
    }

    $conn->close();
}
?>