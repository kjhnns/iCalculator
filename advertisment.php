<?php
$GLOBALS['basic'] = false;
include("template/template.php");
include("_quiz.php");
?>

<script>
var counter = 10;
var id;
id = setInterval(function() {
    counter--;
    if(counter < 0) {
        $('#advert').remove();
        clearInterval(id);
    } else {
        $('#sec').html(counter);
    }
}, 1000);
</script>
<div class="dimmed" id="advert">
   <div class="container">
      <div class="row">
         <div class="8u -2u">
         <br/><br/>
            <section class="special box" style="background-color: #fff">

            <h1>Fahre Sie in die Schweiz!</h1>
            <a href="#" class="image fit"><img src="template/images/pic03.jpg" alt="" /></a>
            <i>Werbeanzeige verschwindet in <span id="sec">10</span> Sekunden </i>
            </section>
         </div>
      </div>
   </div>
</div>
