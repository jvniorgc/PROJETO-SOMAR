<?php
class EditProjec
{
   private  $idProject;
   private $nameProject;
   private $cityProject;
   private $descriptionProject;
   private $objectProject;
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
   
    public function editProject()
    {
        include('connection.php');
        $query = "UPDATE projetos SET nome_projeto = '$this->nameProject', cidade_projeto = '$this->cityProject', descricao_projeto = '$this->descriptionProject', objetivo_projeto = '$this->objectProject' WHERE id_projeto = $this->idProject";
        $sql = mysqli_query($banco, $query);
        if(!$sql)
        {
         echo ('Erro no banco de dados ao deletar Projeto: ' . mysqli_error($banco));
        }
        $query2 = "delete from projetos_com_ods_parceiros where projeto_id=".$this->idProject;
        $sql2 =  mysqli_query($banco, $query2);
        if(!$sql2)
        {
          echo ('Erro no banco de dados ao deletar Projeto da tabela projetos_com_ods_parceiros : ' . mysqli_error($banco));
        }
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
            
            $queryInsertOdsAndPartiners = "INSERT INTO projetos_com_ods_parceiros VALUES (" . $this-> idProject . "," . $odsId . "," . $parceiroId . ")";
            $sql3 = mysqli_query($banco, $queryInsertOdsAndPartiners);
            
            if (!$sql3) {
                echo ('Erro no banco de dados ao inserir novos parceiros e ODS: ' . mysqli_error($banco));
            }
        }
    }
}// class
?>