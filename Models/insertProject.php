<?php
class dataProjects
{
  private $nameProject;
  private $stateProject;
  private $cityProject;
  private $descriptionProject;
  private $objectProject;
  private $idCreator;
  private $optionsOds = [];
  private $optionsPartiners = [];

  public function __get($atributo)
  {
    return $this->$atributo;
  }

  public function __set($atributo, $valor)
  {
    $this->$atributo = $valor;
  }

  public function insertProject()
{
    include('connection.php');
    $querry = "INSERT INTO projetos VALUES (null,'" . $this->nameProject . "','".$this->stateProject."','" . $this->cityProject . "','" . $this->descriptionProject . "','" . $this->objectProject . "'," . $this->idCreator . ")";
    $sql = mysqli_query($banco, $querry);
    
    if (!$sql) {
        echo ('Erro no banco de dados: ' . mysqli_error($banco));
        return;
    }
    
    $lastIdInsetedDb = mysqli_insert_id($banco);
    echo ('Projeto com id: ' . $lastIdInsetedDb . ' inserido com sucesso.');

    $totalOds = count($this->optionsOds);
    $totalPartiner = count($this->optionsPartiners);

    echo ("Total de Ods: " . $totalOds);
    echo ("<br>");
    echo ("Total de Parceiros: " . $totalPartiner);
    echo ("<br>");
    echo("===========================================================");

    $maxLoop = max($totalOds, $totalPartiner);
    
    for ($i = 0; $i < $maxLoop; $i++) {
        $odsId = isset($this->optionsOds[$i]) ? $this->optionsOds[$i] : "null";
        $parceiroId = isset($this->optionsPartiners[$i]) ? $this->optionsPartiners[$i] : "null";
        
        $queryInsertOdsAndPartiners = "INSERT INTO projetos_com_ods_parceiros VALUES (" . $lastIdInsetedDb . "," . $odsId . "," . $parceiroId . ")";
        $sql2 = mysqli_query($banco, $queryInsertOdsAndPartiners);
        
        if (!$sql2) {
            echo ('Erro no banco de dados: ' . mysqli_error($banco));
        }
    }
}
} // class
?>