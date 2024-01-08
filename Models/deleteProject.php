<?php
 class DeleteProject
 {
  private $id;
   public function __set($atributo, $valor)
   {
     $this->$atributo = $valor;
   }
   public function __get($atributo)
  {
    return $this->$atributo;
  }
   public function deleteProject()
   {
    include('connection.php');
    $query = "DELETE FROM projetos_com_ods_parceiros WHERE projeto_id='".$this->id."';";
    $sql1 = mysqli_query($banco, $query);
    if(!$sql1)
    {
        echo("erro ao deletar dados da tabela projetos_com_ods_parceiros" . mysqli_error($banco));
    }
    $query2 = "DELETE FROM projetos WHERE id_projeto='".$this->id."';";
    $sql2 = mysqli_query($banco, $query2);
   if(!$sql2)
    {
        echo("erro ao deletar Projeto" . mysqli_error($banco));
    }
    else{
        echo("projeto excluido com sucesso");
    }
   }
 }// class
?>