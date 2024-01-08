<?php 
class EditUser
{
    private $id;
    private $name;
    private $email;
    private $cpf;
    private $password;
    private $office;
    private $company;

    public function __get($atributo)
   {
     return $this->$atributo;
   }
 
   public function __set($atributo, $valor)
   {
     $this->$atributo = $valor;
   }

   public function editUser()
   {
       include('connection.php');
       $query = "UPDATE users SET nome_user = '$this->name', email_user = '$this->email', cpf_user = '$this->cpf', password_user = '$this->password', cargo = $this->office WHERE id_user = $this->id;";
       $sql = mysqli_query($banco, $query);
       if(!$sql)
       {
        echo ('Erro no banco de dados atualizar os dados do usuario: ' . mysqli_error($banco));
       }
   }



}//class
?>