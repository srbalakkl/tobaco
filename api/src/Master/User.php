<?php
   namespace EXTOBACCO\Master;

   class User
   {
       function login($data){
           $retobj = [];
        
         $Loginid = isset($data->LoginID) ? $data->LoginID : null;   
         $password = isset($data->password) ? $data->password : null;
         $sql = 'select * from extobacco where name=$1 and password =$2 ';

         $db = new \EXTOBACCO\Common\PostgreDB();
         
         $db->Query($sql,[$Loginid,$password]) ;
         $rows = $db->FetchAll();
         $db->DBClose();

         // var_dump($rows);
         if (count($rows)>0) {

            $retobj=["message" => "sucessfully Done"];
         }

           return $retobj;


       }
       function signup($data){
        $retobj = [];
     
      $name = isset($data->Name) ? $data->Name : null;   
      $fname = isset($data->FName) ? $data->FName : null; 
      $gender = isset($data->Gender) ? $data->Gender : null;  
      $birthday = isset($data->birthday) ? $data->birthday : null;  
      $sql ="INSERT INTO extobacco(name,fname,gender,birthday) VALUES($1,$2,$3,$4)";
      
      $db = new \EXTOBACCO\Common\PostgreDB();
      
      if ($db->Query($sql,[$name,$fname,$gender,$birthday]) ) {
         $retobj=["message" =>"sucessfully Done"];
      }

        return $retobj;

        
    }
    function fpword($data){
      $retobj = [];

      $login = isset($data->login) ? $data->login : null; 
      $password = isset($data->Password) ? $data->Password : null;
     
    $sql ='UPDATE extobacco Set password =$1  where name=$2';  
    
    $db = new \EXTOBACCO\Common\PostgreDB();

    if ($db->Query($sql,[$password,$login]) ) {
       $retobj=["message" => "sucessfully Done"];
    }

      return $retobj;
  }

   }
?>

      

    