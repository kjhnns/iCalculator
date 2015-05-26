

$(function() {
   var currentTerm = [];
   var currentResult = null;

   // Value Buttons
   $('.btn.value').click(function(e) {
      var el = $("<span></span>").html($(this).data('display'));
      $('.display p:first-child').append(el);
      currentTerm.push($(this).data('value'));
      console.log(currentTerm);
   });

   // Special c
   $('.btn[data-special="c"]').click(function(e) {
      $('.display p:first-child span:last-child').remove();
      currentTerm.pop();
   });

   // Special ac
   $('.btn[data-special="ac"]').click(function(e) {
      $('.display p:first-child span').remove();
      currentTerm.splice(0,currentTerm.length);
         var el = $("<p></p>");
         $('.display').prepend(el);
   });


   $('#check').click(function(e) {
      if($(this).data('value') == currentResult) {
         alert("Ihr Ergebnis ist richtig!");
         location.reload();
      } else {
         alert("Ihr Ergebnis ist noch nicht richtig!");
      }
   });

   // Special equals
   $('.btn.equals').click(function(e) {
      function roundToTwo(num) {
          return +(Math.round(num + "e+2")  + "e-2");
      }
      try {
          currentResult = roundToTwo(eval(formatTerm(currentTerm)));
      } catch (e) {
          if (e instanceof SyntaxError) {
            var el = $("<span></span>").html("Syntax Fehler: ");
            $('.display p:first-child').prepend(el);

            currentTerm.splice(0,currentTerm.length);
            currentResult = 0;

            var el = $("<p></p>");
            $('.display').prepend(el);
            return;
          }
      }

      if(isNaN(currentResult)) {
         var el = $("<span></span>").html("Invalid: ");
         $('.display p:first-child').prepend(el);

         currentTerm.splice(0,currentTerm.length);
         currentResult = 0;

         var el = $("<p></p>");
         $('.display').prepend(el);
         return;
      }

      // Display
      var el = $("<p></p>").html(currentResult);
      $('.display').prepend(el);

      // value
      currentTerm.splice(0,currentTerm.length)
      currentTerm[0] = currentResult;
      $('#result').html(currentResult);

   });

   function formatTerm(term) {
      var newTerm = [];
      var dot = false;
      var currNum = null;

      for (var i = 0; i < term.length; i++) {
         console.log(currNum);
         console.log(dot);
         if(term[i] === '.' && !dot) {
            dot = true;
         }


         if(term[i] === '(' || term[i] === ')') {
            if(currNum !== null) {
               newTerm.push(currNum);
            }
            newTerm.push(term[i]);
            currNum = null;
         }

         if(typeof term[i] === 'number') {
            if(currNum === null) {
               if(dot === true) {
                  currNum = term[i] / 10;
               } else {
                  currNum = term[i];
               }
            } else {
               if(dot === true) {
                  currNum = parseFloat("" +currNum + "." + term[i]);
                  dot = false;
               } else {
                  currNum = parseFloat("" +currNum + term[i]);
               }
            }
         }


         if(typeof term[i] === 'object') {
            if(term[i].type === 'op') {
               newTerm.push(currNum);
               newTerm.push(term[i].val);
               currNum = null;
            }
            if(term[i].type === 'pow') {
               newTerm.push("Math.pow("+currNum+","+term[i].val+")");
               currNum = null;
            }
         }
      }
      if(currNum !== null) {
         newTerm.push(currNum);
      }

      console.log(newTerm);
      return newTerm.join("");

   }

});