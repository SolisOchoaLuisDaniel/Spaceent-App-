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
            case "Login":
            $usuario = $_GET['Usuario'] ?? null;
            $contrasena = $_GET['Contrasena'] ?? null;
        
            if ($usuario && $contrasena) {
                // Verificar si existe un registro con el usuario y contraseña proporcionados
                $sql = "SELECT * FROM Usuarios WHERE Usuario='$usuario' AND Contrasena='$contrasena'";
                $result = $conn->query($sql);
        
                if ($result->num_rows > 0) {
                    $usuarioEncontrado = $result->fetch_assoc();
                    echo json_encode($usuarioEncontrado);
                } else {
                    echo json_encode(array("message" => "Usuario no encontrado"));
                }
            } else {
                echo json_encode(array("error" => "Faltan parámetros"));
            }
            break;
        case "Add":
            $usuario = $_GET['Usuario'] ?? null;
            $correo = $_GET['Correo'] ?? null;
            $contrasena = $_GET['Contrasena'] ?? null;
            $nombrecliente = $_GET['Nombre_Cliente'] ?? null;
            $telefono = $_GET['Telefono'] ?? null;
            $totalcompras = $_GET['Total_Compras'] ?? null;
            $creditos = $_GET['Creditos'] ?? null;
            
            
            if ($usuario && $correo && $contrasena && $nombrecliente && $telefono){
                $sql = "INSERT INTO Usuarios (Usuario, Correo, Contrasena, Nombre_Cliente, Telefono, Total_Compras, Creditos) VALUES ('$usuario', '$correo', '$contrasena', '$nombrecliente', '$telefono', $totalcompras, $creditos)";
                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Usuario agregado correctamente"));
                }
                else {
                    echo json_encode(array("error" => "Faltan parámetros"));
                }
            }
            break;
        case "View":
            $id = $_GET['Id'] ?? null;

            if ($id) {
                $sql = "SELECT * FROM Usuarios WHERE Id=$id";
                $result = $conn->query($sql);
                if($conn->query($sql) === TRUE){
                    echo json_encode($usuario);
                } else {
                    echo json_encode(array("message" => "No se encontró el usuario con el ID proporcionado"));
                }
            } else {
                // Si no se proporciona un ID, devolver todos los usuarios con clientes asociados
                $sql = "SELECT * FROM Usuarios";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    $usuarios = array();

                    while ($row = $result->fetch_assoc()) {
                        $usuarios[] = $row;
                    }

                    echo json_encode($usuarios);
                } else {
                    echo json_encode(array("message" => "No se encontraron usuarios"));
                }
            }
            break;
        case "Update":
            $id = $_GET['Id'] ?? null;
            $usuario = $_GET['Usuario'] ?? null;
            $correo = $_GET['Correo'] ?? null;
            $contrasena = $_GET['Contrasena'] ?? null;
            $nombrecliente = $_GET['Nombre_Cliente'] ?? null;
            $telefono = $_GET['Telefono'] ?? null;
            
            if ($id && $usuario && $correo && $contrasena && $nombrecliente && $telefono) {
                $sql = "UPDATE Usuarios SET Usuario='$usuario', Correo = '$correo', Contrasena='$contrasena', Nombre_Cliente='$nombrecliente', Telefono='$telefono' WHERE Id=$id";

                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Usuario actualizado correctamente"));
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
                $sql = "DELETE FROM Usuarios WHERE Id=$id";

                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Usuario Eliminado correctamente"));
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