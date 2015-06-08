// calculator Functions

var getStatus = null;
var showAdvertisement = null;

var right, wrong, info;

$(function() {
    var self = this;
    self.promptCounter = 2;

    function appInit() {
        nextQuestion();
        self.rightAnswers = 0;
        self.questionsAnswered = 0;
        $('.prompt').hide();
    }

    right = function() {
        var rself = {};
        rself.promptCounter = self.promptCounter;
        $('.prompt.success').show();

        rself.id = setInterval(function() {
            rself.promptCounter--;
            if (rself.promptCounter < 0) {
                $('.prompt.success').hide();
                clearInterval(rself.id);
            }
        }, 1000);
    };

    wrong = function() {
        var wself = {};
        wself.promptCounter = self.promptCounter;
        $('.prompt.fail').show();

        wself.id = setInterval(function() {
            wself.promptCounter--;
            if (wself.promptCounter < 0) {
                $('.prompt.fail').hide();
                clearInterval(wself.id);
            }
        }, 1000);
    };

    info = function() {
        var iself = {};
        iself.promptCounter = self.promptCounter;
        $('.prompt.info').show();

        iself.id = setInterval(function() {
            iself.promptCounter--;
            if (iself.promptCounter < 0) {
                $('.prompt.info').hide();
                clearInterval(iself.id);
            }
        }, 1000);
    };

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
            right();
            self.rightAnswers += 1;
            resetCalculator();
            nextQuestion();
        } else {
            wrong();
            resetCalculator();
            nextQuestion();
        }
    });

    appInit();
});
