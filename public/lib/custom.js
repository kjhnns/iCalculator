// calculator Functions

var getStatus = null;
var showAdvertisement = null;

$(function() {
    var self = this;

    function appInit() {
        nextQuestion();
        self.rightAnswers = 0;
        self.questionsAnswered = 0;
        if (showAdvertisement !== null) {
            showAdvertisement();
        }
    }

    getStatus = function(reference) {
        return {
            rA: self.rightAnswers,
            qA: self.questionsAnswered
        };
    };


    var calculatorExercises = [{
        question: '526<sup>3</sup> + 421 + 1299<sup>2</sup>',
        answer: 147219398
    }, {
        question: '9852 + 5678<sup>2</sup> + 5449<sup>3</sup>',
        answer: 161821783385
    }, {
        question: '448<sup>3</sup> + 2256 + 4589<sup>2</sup>',
        answer: 110976569
    }, {
        question: '899<sup>3</sup> + 567 + 2589<sup>2</sup>',
        answer: 733276187
    }, {
        question: '5561 + 1042<sup>2</sup> + 3787<sup>3</sup>',
        answer: 54311855728
    }, {
        question: '748<sup>3</sup> + 1130 + 2966<sup>2</sup>',
        answer: 427307278
    }];

    function resetCalculator() {
        $('.btn[data-special="ac"]').click();
        currentResult = 0;
        $('#result').html(currentResult);
    }

    function nextQuestion() {
        var exercise = calculatorExercises.pop();
        if (exercise !== undefined) {
            $('#question').html(exercise.question);
            $('#check').data('value', exercise.answer);
            if (showAdvertisement !== null) {
                showAdvertisement();
            }
        }
    }

    $('#check').click(function(e) {
        self.questionsAnswered += 1;
        if ($(this).data('value') == currentResult) {
            alert("Ihr Ergebnis ist richtig!");
            self.rightAnswers += 1;
            resetCalculator();
            nextQuestion();
        } else {
            alert("Ihr Ergebnis ist noch nicht richtig!");
            resetCalculator();
            nextQuestion();
        }
    });

    appInit();
});
