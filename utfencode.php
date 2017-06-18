<!DOCTYPE html>
<html>
  <head>

    <meta charset="utf-8">
    <title>Kannada to hindi</title>
  </head>
  <body>

    <form action="" method="POST">
        <input type="text" name="hinditext" value=""><br>
        <input type="submit" name="submit" value="submit">
    </form>
    <h2>
      <?php


      function _uniord($c) {
          if (ord($c{0}) >=0 && ord($c{0}) <= 127)
              return ord($c{0});
          if (ord($c{0}) >= 192 && ord($c{0}) <= 223)
              return (ord($c{0})-192)*64 + (ord($c{1})-128);
          if (ord($c{0}) >= 224 && ord($c{0}) <= 239)
              return (ord($c{0})-224)*4096 + (ord($c{1})-128)*64 + (ord($c{2})-128);
          if (ord($c{0}) >= 240 && ord($c{0}) <= 247)
              return (ord($c{0})-240)*262144 + (ord($c{1})-128)*4096 + (ord($c{2})-128)*64 + (ord($c{3})-128);
          if (ord($c{0}) >= 248 && ord($c{0}) <= 251)
              return (ord($c{0})-248)*16777216 + (ord($c{1})-128)*262144 + (ord($c{2})-128)*4096 + (ord($c{3})-128)*64 + (ord($c{4})-128);
          if (ord($c{0}) >= 252 && ord($c{0}) <= 253)
              return (ord($c{0})-252)*1073741824 + (ord($c{1})-128)*16777216 + (ord($c{2})-128)*262144 + (ord($c{3})-128)*4096 + (ord($c{4})-128)*64 + (ord($c{5})-128);

          return 0;
        }
        /*function getInputUnicode($inputString){
          $result="";
          for ($i=0; $i < strlen($inputString); $i++) {
            $inputchar =  $inputString[$i];
            echo _uniord($inputchar);
            //$result+=strval(dechex(_uniord($inputchar)));
          }
          //echo $result;
          //return $result;
        }*/

        /*
              the block inside isset is executed only if the submit button is clicked

              PDO is an object to connect with the db. it is a socket class

        */
        if(isset($_POST['submit'])){


          try{
            $input = $_POST['hinditext'];
            //this is to make sure that ccd does not get mapped to 94d for the lst character.
            //an example of this case would be of dhinar. without this dhinar will not get transliterated properly.

            if(substr($input,strlen($input)-3,strlen($input)) == "ccd"){
              $input = substr($input,0,strlen($input)-3);
            }

            // this is to add extra aa ki matra at the end of the word if no other swara exists at the end.
            //example kalpavruksha in kannada becomes kalpavruksh in hindi without this

            if(strcmp(substr($input,strlen($input)-3,strlen($input)),"cbe")<0 ||  strcmp(substr($input,strlen($input)-3,strlen($input)),"ccc")>0){
              $input=$input."cbe";
            }

            $string=str_split($input,3);
            $conn =new PDO("mysql:host=localhost;dbname=IISC","root","root");

            // theese lines are for error reporting standard code
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare('SELECT HINDI FROM kannada WHERE KANNADA=:kan');
            foreach ($string as $str) {
              
              $stmt->execute(array(
                'kan' => $str
              ));
              // fetch gives the first result that matches the query. if uou want all results then use fetchAll()
              $row = $stmt->fetch();
              echo "&#x$row[0]";

            }
            /*
            for($kan = 0x0cbe,$hin=0x093e;$kan<=0x0cc3;$kan=$kan+1,$hin=$hin+1){

                $stmt->execute(array('kan' => strval(dechex($kan)),'hin' => strval(dechex($hin))));
            }*/


          }catch(Exception $ee){
            $ee->getMessage();
          }
        }
       ?>
    </h2>
  </body>
</html>
