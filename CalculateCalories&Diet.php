<!DOCTYPE html>
<html>
	
    <head>
        <link rel="stylesheet" href="css/CalculateCalories&Diet.css"/>
		<title>Calculate Calories & Diet</title>
    </head>
    <body>
        <div class="header">
            <div class="name">
				<h1>Game Of Fitness</h1>
				<div class="border"></div>
            </div>
            <div class="nav">
                <span class="span"><a href="game_of_fitness.php">Home</a></span>
                <div class="border2"></div>
						<div class="nutrio">
							     calculate calories & diet
						</div>
            </div>
        </div>
        
        
        <div class="main">
            <div class="D">
                <?php include "Caloriesinfood.php"; ?>
                <?php include "CalculateBMI.php"; ?>
            </div>
        </div>
        
        
        <div class="footerlast">
        <div class="left">
            <p>&copy; Copyright 2018 Free</p>
        </div>
		<div class="right">
            <ul>
                <li> Designed By
                    <ul>
                        <li>Adballah Toballa</li>
                        <li>Mohamed Abo Gwila</li>
                        <li>Ahmed Mostafa</li>
                        <li>Mohamed Mosad</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="center">
            <ul>
                <li> Thanks To
                    <ul>
                        <li>Dr.Mazen Bibars</li>
                    </ul>
                </li>
            </ul>
       </div>
	   </div>

        <script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/CalculateCalories&Diet.js"></script>		
    </body>
</html>