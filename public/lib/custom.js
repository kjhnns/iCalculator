// calculator Functions

var getStatus = null;
var right, wrong, info;

function app() {
    var self = {};
    self.promptCounter = 2;

    self.initialize = function() {
        redirectTimer();
        nextQuestion();
        self.rightAnswers = 0;
        self.questionsAnswered = 0;
        $('#qa').html(self.questionsAnswered);
        $('#ra').html(self.rightAnswers);
        $('.prompt').hide();
        if (showAdvertisement !== undefined) {
            showAdvertisement();
        }
        self.showCountdown();
    };

    self.right = function() {
        var rself = {};
        rself.promptCounter = self.promptCounter + (advertisementEnabled === true ? 5 : 0);
        $('.prompt.success').show();

        rself.id = setInterval(function() {
            rself.promptCounter--;
            if (rself.promptCounter < 0) {
                $('.prompt.success').hide();
                clearInterval(rself.id);
            }
        }, 1000);
    };

    self.wrong = function() {
        var wself = {};
        wself.promptCounter = self.promptCounter + (advertisementEnabled === true ? 5 : 0);
        $('.prompt.fail').show();

        wself.id = setInterval(function() {
            wself.promptCounter--;
            if (wself.promptCounter < 0) {
                $('.prompt.fail').hide();
                clearInterval(wself.id);
            }
        }, 1000);
    };

    self.info = function() {
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

    self.getStatus = function(reference) {
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
            if (showAdvertisement !== undefined) {
                showAdvertisement();
            }
        }
    }

    $('#check').click(function(e) {
        self.questionsAnswered += 1;
        $('#qa').html(self.questionsAnswered);
        if ($(this).data('value') == currentResult) {
            self.right();
            self.rightAnswers += 1;
            resetCalculator();
            nextQuestion();
            $('#ra').html(self.rightAnswers);
        } else {
            self.wrong();
            resetCalculator();
            nextQuestion();
        }
    });

    function redirectTimer() {
        var timeOutFunction = function() {
            // variables
            var status = self.getStatus();

            // baseurl
            var href = "http://umfragen.ise.tu-darmstadt.de/sosci/freetrialfreemium/";

            // parameters
            href += "?i=" + userReference;
            href += "&password=test";
            href += "&ra=" + status.rA;
            href += "&qa=" + status.qA;

            $('#advert').hide();
            $('#redirected').show();
            $('#content').addClass('blurred');
            location.href = href;
        };
        setTimeout(timeOutFunction, (timeToRedirect * 60) * 1000); // 60,000ms eq 1min
    }

    self.showCountdown = function() {
        function toMin(secs) {
            var s = parseInt(secs % 60);
            return parseInt(secs / 60) + ":" + (s < 10 ? "0" : "") + s;
        }

        var self = {};
        self.counter = 60 * timeToRedirect;
        $('#countdown').html(toMin(self.counter));

        self.id = setInterval(function() {
            if (self.counter > 0) {
                self.counter--;
            }
            $('#countdown').html(toMin(self.counter));
        }, 1000);
    };

    return self;
}

function intro() {
    var self = {
        site: 1
    };

    self.next = function() {
        $('#intro .site' + self.site).hide();
        self.site += 1;
        if (self.site <= 5) {
            $('#intro .site' + self.site).show();
        } else {
            self.start();
        }
    };

    self.start = function() {
        $('#intro').hide();
        app.initialize();
    };

    return self;
}
