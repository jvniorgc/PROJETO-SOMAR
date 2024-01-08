<?php
class listProjects {
    public function __get($atributo) {
        return $this->$atributo;
    }

    public function __set($atributo, $valor) {
        $this->$atributo = $valor;
    }

    function listarAll() {
        include('connection.php');
        $query = "SELECT * FROM projetos;";
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
    function listarAllFromODS($ods) {
        include('connection.php');
        $query = "SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
        FROM projetos
        LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        WHERE id_ods = ".$ods." GROUP BY projetos.id_projeto;";
        
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listAllDataFromODS($ods)
    {
        include('connection.php');
        $query = "select * from ods where id_ods=".$ods.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listAllProjectsFromCause($cause)
    {
        include('connection.php');
        $query = "SELECT DISTINCT projetos.*, ods.nome_ods, parceiros.nome_parceiro
        FROM projetos
        JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        JOIN causas_atuacao ON ods.causa_atuacao_id = causas_atuacao.id_causa_atuacao
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        WHERE causas_atuacao.id_causa_atuacao = ".$cause.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listAllProjectsFromIdUser($id)
    {
        include('connection.php');
        $query = "select * from projetos where user_id =".$id.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listProjectFromId($id)
    {
        include('connection.php');
        $query = "select * from projetos where id_projeto =".$id.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listProject($id){
        include('connection.php');
        $query = "SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
        FROM projetos
        LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        where id_projeto =".$id.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
    function listAllDataProject($id){
        include('connection.php');
        $query = "SELECT projetos.*, ods.id_ods, parceiros.nome_parceiro
        FROM projetos
        LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        where id_projeto =".$id.";";
        $sql = mysqli_query($banco, $query);
        $rows = mysqli_num_rows($sql);
        $records = array();
        for ($i = 0; $i < $rows; $i++) {
            $record = mysqli_fetch_assoc($sql);
            $records[] = $record; 
        }
        echo json_encode($records); 
        mysqli_close($banco);
    }
}// class
?>
