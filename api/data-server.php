<?php
// echo(php_info());
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  
  require_once __DIR__.'/vendor/autoload.php';
  
  $generalFunction = new \EXTOBACCO\Common\GeneralFunctions();
  if ($generalFunction->addCORHeaders()) {
    exit();
  }
  $generalFunction->addGeneralHeaders();
    
switch (true){
    case (isset($_GET['log']) && $_GET['log']);
    $data = file_get_contents('php://input');
    $postdata = json_decode($data);
 
    $log= new \EXTOBACCO\Master\User();
    echo  json_encode($log->login ($postdata));
        break;
        
    case (isset($_GET['sign']) && $_GET['sign']);
    $data = file_get_contents('php://input');
    $postdata = json_decode($data);

    $sing= new \EXTOBACCO\Master\User();
    echo  json_encode($sing->signup($postdata));
    break;

    case (isset($_GET['fpword']) && $_GET['fpword']);
    $data = file_get_contents('php://input');
    $postdata = json_decode($data);

    $fpassword= new \EXTOBACCO\Master\User();
    echo  json_encode($fpassword->fpword($postdata));
    break;

    default :
    header($_SERVER['SERVER_PROTOCOL']." 404 Not Found", false, 404); // HTTP/1.1 404 Not Found
    die();
}
?>