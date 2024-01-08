<?php
class dadosProjetos
{
  private $nomeProjeto;
  private $estadoProjeto;
  private $cidadeProjeto;
  private $descricaoProjeto;
  private $objetivoProjeto;
  private $idCriador;
  private $opOds = [];
  private $partiner = [];

  public function __get($atributo)
  {
    return $this->$atributo;
  }

  public function __set($atributo, $valor)
  {
    $this->$atributo = $valor;
  }

  public function inserirProjeto()
{
    include('conexao.php');
    $querry = "INSERT INTO projetos VALUES (null,'" . $this->nomeProjeto . "','".$this->estadoProjeto."','" . $this->cidadeProjeto . "','" . $this->descricaoProjeto . "','" . $this->objetivoProjeto . "'," . $this->idCriador . ")";
    $sql = mysqli_query($banco, $querry);
    
    if (!$sql) {
        echo ('Erro no banco de dados: ' . mysqli_error($banco));
        return;
    }
    
    $ultimo_id = mysqli_insert_id($banco);
    echo ('Projeto com id: ' . $ultimo_id . ' inserido com sucesso.');

    $totalOds = count($this->opOds);
    $totalPartiner = count($this->partiner);

    echo ("Total de Ods: " . $totalOds);
    echo ("<br>");
    echo ("Total de Parceiros: " . $totalPartiner);
    echo ("<br>");
    echo("===========================================================");

    $maxLoop = max($totalOds, $totalPartiner);
    
    for ($i = 0; $i < $maxLoop; $i++) {
        $odsid = isset($this->opOds[$i]) ? $this->opOds[$i] : "null";
        $parceiroid = isset($this->partiner[$i]) ? $this->partiner[$i] : "null";
        
        $queryInsertOds = "INSERT INTO projetos_com_ods_parceiros VALUES (" . $ultimo_id . "," . $odsid . "," . $parceiroid . ")";
        $sql2 = mysqli_query($banco, $queryInsertOds);
        
        if (!$sql2) {
            echo ('Erro no banco de dados: ' . mysqli_error($banco));
        }
    }
}

} // class
?>