<?php
class dataUsers{
    private $name;
    private $email;
    private $cpf;
    private $password;
    private $position;
    private $company;

    public function __get($atributo)
  {
    return $this->$atributo;
  }

  public function __set($atributo, $valor)
  {
    $this->$atributo = $valor;
  }

  public function insertUser(){
    include('connection.php');
    $querry = "INSERT INTO users VALUES (null,'" . $this->name . "','".$this->email."','" . $this->cpf . "','" . $this->password . "','" . $this->position . "','".$this->company."')";
    $sql = mysqli_query($banco, $querry);
    if (!$sql) {
        echo ('Erro no banco de dados: ' . mysqli_error($banco));
        return;
    }
}


}//class
?>