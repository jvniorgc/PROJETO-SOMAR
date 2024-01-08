<?php 
class dataLogin { 
    private $cpf; 
    private $password; 
    private $id; 

    public function __get($atributo) { 
        return $this->$atributo; 
    } 

    public function __set($atributo, $valor) { 
        $this->$atributo = $valor; 
    } 

    public function validateLogin() {
        if ($this->cpf == null || $this->password == null) {
            // header('refresh:2.0; http://localhost/SENAC-DOJO-2023/login.html');
        } else {
            include('connection.php');
            $query = "SELECT id_user, cpf_user, password_user, nome_user, cargo, empresa_id FROM users WHERE cpf_user = '" . $this->cpf . "' AND password_user = '" . $this->password . "';"; 
            $sql = mysqli_query($banco, $query);
            $rowsReturneds = mysqli_num_rows($sql);
            if ($rowsReturneds == 1) {
                $records = array();
                $record = mysqli_fetch_assoc($sql);
                $records[] = $record;
                echo json_encode($records);
            } else {
                echo json_encode([]);
            }
            mysqli_close($banco);
        }
    }
} 
?>
