<?php
$questions = array(
    array(
          "q" => "125<sup>4</sup> + 24 × 1999",
          "a" => "244188601"
          ),
    array(
          "q" => "125<sup>3</sup> + 24 × 1999",
          "a" => "2001101"
          ),
    array(
          "q" => "125<sup>2</sup> + 24 × 1999",
          "a" => "63601"
          ),
    array(
          "q" => "125 + 24",
          "a" => "149"
          ),
    array(
          "q" => "12 + 24",
          "a" => "36"
          ),
    array(
          "q" => "1 + 1",
          "a" => "2"
          )
);

$q = array_rand($questions);

?>

<section id="three" class="wrapper style1">
   <div class="container">
      <div class="row">
         <div class="5u">
            <section>
               <h3>Bitte lösen Sie folgende Aufgabe.</h3>
               <section class="special box">
                  <p><?=$q["q"]?></p>
               </section>
            <h5>Aktuelles Taschenrechner Ergebnis:</h5>
               <p><div id="result" style="text-align: center; font-weight: bold">0</div></p>
               <p style="text-align: center;"><input type="button" value="Prüfen" id="check" data-value="<?=$q["a"]?>" /></p>
            </section>
         </div>
         <div class="4u -1u">
            <?php include("_calculator.php"); ?>
         </div>
      </div>
   </div>
</section>
