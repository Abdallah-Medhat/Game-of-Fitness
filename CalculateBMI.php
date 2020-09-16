<?php
$weight = $height = "0";
$hei ="1";
//make sure the page didn't send any thing
if($_GET)
{

    if($_GET['Result'])
    {
		$weight = test_input($_GET["weight"]);
        $height = test_input($_GET["height"]);
        $hei = $height /100;
	}
	$result = $weight / ($hei*$hei);
}

function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>


<div class="divL">
    <h2>calculate BMI</h2>
    <br>
    <form action="<?php $_SERVER["PHP_SELF"] ;?>" method="get">
        <label >weight :</label>
        <input required type="number" name="weight" min="30" max="200" autofocus autocomplete="off" placeholder="kgs">
        <br><br>
        <label >height : </label>
        <input  required type="number"   name="height" min="50" max="300" autocomplete="off" placeholder="cm">
        <br><br>
        <input style="margin-left: 86px; margin-top: 10px " type="submit" value="Result" name="Result">
        <input type="reset">
        <br><br>
        <textarea  readonly rows="3" cols="40" style="margin-left: 100px">
            <?php
            if($hei == 1)
            {
                echo "";
            }
            else
            {
                if($result < 25 and $result >18)
                {
                    echo 'Your Diet Is Skinny Fat';
                }
                else if ($result <18)
                {
                    echo 'Your Diet Is Weight Gain';
                }
                else
                {
                    echo 'Your Diet Is Weight Loss';
                }
            }
            ?>
        </textarea>
        <br><br><br> 
	</form>
    <p class="p1">
        Back To the <span class="span1"><a href="game_of_fitness.php">Home</a></span> Page
    </p>
</div>
