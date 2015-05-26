<section style="max-width: 294.313px">
   <div class="display">
      <p></p>
   </div>
   <?php if($GLOBALS['basic']): ?>
   <div class="calc-row">
      <div class="btn disabled">x<sup>2</sup></div>
      <div class="btn disabled">x<sup>3</sup></div>
      <div class="btn disabled">x<sup>4</sup></div>
      <div class="btn disabled">x<sup>5</sup></div>
   </div>
   <?php else: ?>
   <div class="calc-row">
      <div class="btn value func" data-display="<sup>2</sup>" data-value='{"type": "pow", "val": 2}'>x<sup>2</sup></div>
      <div class="btn value func" data-display="<sup>3</sup>" data-value='{"type": "pow", "val": 3}'>x<sup>3</sup></div>
      <div class="btn value func" data-display="<sup>4</sup>" data-value='{"type": "pow", "val": 4}'>x<sup>4</sup></div>
      <div class="btn value func" data-display="<sup>5</sup>" data-value='{"type": "pow", "val": 5}'>x<sup>5</sup></div>
   </div>
   <?php endif; ?>
   <div class="calc-row">
      <div class="btn value func" data-display="+" data-value='{"type": "op", "val": "+"}'>+</div>
      <div class="btn value func" data-display="-" data-value='{"type": "op", "val": "-"}'>-</div>
      <div class="btn value func" data-display="×" data-value='{"type": "op", "val": "*"}'>×</div>
      <div class="btn value func" data-display="÷" data-value='{"type": "op", "val": "/"}'>÷</div>
   </div>
   <div class="calc-row">
      <div class="btn value" data-display="7" data-value="7">7</div>
      <div class="btn value" data-display="8" data-value="8">8</div>
      <div class="btn value" data-display="9" data-value="9">9</div>
      <div class="btn func" data-special="ac">AC</div>
   </div>
   <div class="calc-row">
      <div class="btn value" data-display="4" data-value="4">4</div>
      <div class="btn value" data-display="5" data-value="5">5</div>
      <div class="btn value" data-display="6" data-value="6">6</div>
      <div class="btn func" data-special="c">C</div>
   </div>
   <div class="calc-row">
      <div class="btn value" data-display="1" data-value="1">1</div>
      <div class="btn value" data-display="2" data-value="2">2</div>
      <div class="btn value" data-display="3" data-value="3">3</div>
      <div class="btn value func" data-display="(" data-value="(">(</div>
   </div>
   <div class="calc-row">
      <div class="btn value" data-display="0" data-value="0">0</div>
      <div class="btn value" data-display="." data-value=".">.</div>
      <div class="btn equals">=</div>
      <div class="btn value func" data-display=")" data-value=")">)</div>
   </div>
</section>