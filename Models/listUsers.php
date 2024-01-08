<?php
class listUsers {
    public function __get($atributo) {
        return $this->$atributo;
    }

    public function __set($atributo, $valor) {
        $this->$atributo = $valor;
    }

    function listAllUsers($company) {
        include('connection.php');
        $query = "SELECT id_user, nome_user FROM users WHERE cargo=2 AND empresa_id=$company;";//cargo 2 pq é apenas os usuarios e não os adms
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array(); // Array to store the records
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_row($sql);
            $records[] = $record; // Add the record to the array of records
        }
        echo json_encode($records); // Print the records in JSON format
        mysqli_close($banco);
    }
    function listUserData($id){
        include('connection.php');
        $query = "SELECT users.id_user, users.nome_user, users.email_user, users.cpf_user, users.password_user, users.cargo, empresa.nome_empresa
                  FROM users
                  LEFT JOIN empresa ON users.empresa_id = empresa.id_empresa
                  where id_user = $id;";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array(); // Array to store the records
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_row($sql);
            $records[] = $record; // Add the record to the array of records
        }
        echo json_encode($records); // Print the records in JSON format
        mysqli_close($banco);
    }
}// class
?>
