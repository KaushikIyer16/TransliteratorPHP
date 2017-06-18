<?php

    // first step is to get the request sent by the user of the API
    // request method responds with either GET or POST or whatever required.
    // for now we are using only GET so a simple call to request method is enough
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    $url = $_SERVER['REQUEST_URI'];
    $requestParams = explode("/",$url);
    $result=array();


    // once we get the request parameters. we need to prep the input to the query.
    $tablename = trim($requestParams[2]);
    $dstlanguage=strtoupper($requestParams[3]);
    $srclanguage=strtoupper($requestParams[2]);
    $queryString = "SELECT $dstlanguage FROM $tablename WHERE $srclanguage=:textToBeConverted";

    // now that the input is preped we start querying the db for data and start populating the result string
    $conn= new PDO("mysql:host=localhost;dbname=IISC","root","root");
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare($queryString);

    // bottom we are splitting the request string into sets of 3 characters and then the fetch will occur for each and every
    // one of theese character sets
    $ttc = str_split($requestParams[4],3);
    foreach ($ttc as $convert) {
      $stmt->execute(array(

        'textToBeConverted'=> $convert
      ));

      $row=$stmt->fetch();
      // now the result fetched will be pushed into a result array.since the result can be more than one equivalent character
      // i.e, it can be a combination of two or more sets. hence we need this iterator next line.
      $resChar = str_split($row[0],3);
      foreach ($resChar as $res) {
        array_push($result,$res);
      }


    }

    // now the result of this can be either echoed for debugg purposes or can be returned to the calling source.
     echo json_encode($result);

 ?>
