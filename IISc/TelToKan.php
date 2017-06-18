<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Telugu To Kannada</title>
  </head>
  <body>

      <form action="" method="POST">
          <input type="text" name="kantext" value=""><br>
          <input type="submit" name="submit" value="submit">
      </form>
      <h2>
        <?php
        /*The input will be a unicode string obtained from a js function via an API call
          and the response will be a string tht will be the unicode converted value*/

            if(isset($_POST['submit'])){
              /*below we will put all the rules followed by its splitting into a set of strings of lenght 3
                followed by a mapping request from the db.*/

                $input = $_POST['kantext'];
                $string = str_split($input,3);
                $conn =new PDO("mysql:host=localhost;dbname=IISC","root","root");

                // theese lines are for error reporting standard code
                $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                $stmt = $conn->prepare('SELECT KANNADA FROM telugu WHERE TELUGU=:tel');
                foreach ($string as $str) {
                  $stmt->execute(array(
                    'tel' => $str
                  ));
                  // fetch gives the first result that matches the query. if uou want all results then use fetchAll()
                  $row = $stmt->fetch();
                  echo "&#x$row[0]";
                }
            }
         ?>
      </h2>
  </body>
</html>
