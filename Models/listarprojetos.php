<?php
class listarOds {
    private $ods;

    public function __get($atributo) {
        return $this->$atributo;
    }

    public function __set($atributo, $valor) {
        $this->$atributo = $valor;
    }

    function listardados() {
        include('conexao.php');
        $query = "SELECT nome_projeto FROM projetos WHERE ods_id_1 = " . $this->ods;
        $sql = mysqli_query($banco, $query);
        $linhas = mysqli_num_rows($sql);
        $registros = array(); // Array to store the records
        for ($i = 0; $i < $linhas; $i++) {
            $registro = mysqli_fetch_row($sql);
            $registros[] = $registro; // Add the record to the array of records
        }
        echo json_encode($registros); // Print the records in JSON format
        mysqli_close($banco);
    }
    function listarAll() {
        include('conexao.php');
        $query = "SELECT * FROM projetos;";
        $sql = mysqli_query($banco, $query);
        $linhas = mysqli_num_rows($sql);
        $registros = array(); // Array to store the records
        for ($i = 0; $i < $linhas; $i++) {
            $registro = mysqli_fetch_row($sql);
            $registros[] = $registro; // Add the record to the array of records
        }
        echo json_encode($registros); // Print the records in JSON format
        mysqli_close($banco);
    }
    function listarAllFromODS($ods) {
        include('conexao.php');
        $query = "SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
        FROM projetos
        LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        WHERE id_ods = ".$ods.";";
        $sql = mysqli_query($banco, $query);
        $linhas = mysqli_num_rows($sql);
        $registros = array();
        for ($i = 0; $i < $linhas; $i++) {
            $registro = mysqli_fetch_assoc($sql);
            $registros[] = $registro; 
        }
        echo json_encode($registros); 
        mysqli_close($banco);
    }
}
?>
