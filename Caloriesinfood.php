<?php

include "conection.php";

$cals="";
$fats="";
if ($_POST)
{
    if ($_POST['submit'])
    {
		$ser = $_POST['search'];
        $sql1 = "SELECT * FROM food";
        $res1 = $connect -> query($sql1);
        if (mysqli_num_rows($res1) > 0)
		{
			while ($row1 = mysqli_fetch_assoc($res1))
            {
				if ($ser==$row1['name'])
                {
					$cals=$row1["cals"];
                    $fats=$row1["fats"];
                }
            }
        }
	}
}
?>

<div class="divR" id="divR">
    <h2>calories in food</h2>
    <br>
    <form method="post" action="<?php $_SERVER["PHP_SELF"];?>">
        <input required name="search" autocomplete="off" id="s" style="margin-left: 160px; width: 190px" type="text">
        <br><br>
        <input style="margin-left: 100px; margin-top: 10px; height: 33px " type="submit" value="Search" name="submit"> 
        <input style="height: 33px" type="reset">
        <br><br><br>
        <label style="margin-left: 80px">Cals : </label>
        <textarea  style="margin-left: 60px; margin-top: 10px" readonly rows="2" cols="20" >
            <?php echo $cals; ?>
        </textarea>
        <br>
        <label style="margin-left: 80px">Fats : </label>
        <textarea style=" margin-left: 63px; margin-top: 10px" readonly  rows="2" cols="20">
            <?php echo $fats; ?>
        </textarea>
    </form>
</div>