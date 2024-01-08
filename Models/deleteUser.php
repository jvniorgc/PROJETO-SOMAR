<?php
 class DeleteUser
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
   public function deleteUser()
   {
    include('connection.php');
    $query = "DELETE FROM users WHERE id_user='".$this->id."';";
    $sql = mysqli_query($banco, $query);
    if(!$sql)
    {
        echo("erro ao deletar dados da tabela users" . mysqli_error($banco));
    }
   }
 }// class
?>