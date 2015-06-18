// calculator Functions

var getStatus = null;
var right, wrong, info;
var _timestamp = null;
var _stamps = [];

function app() {

    var calculatorExercisesLength = 0;
    var calculatorExercises = [{
        question: '1129<sup>2</sup> + 321<sup>3</sup> + 1024',
        answer: 34351826
    }, {
        question: '526<sup>3</sup> + 421 + 1299<sup>2</sup>',
        answer: 147219398
    }, {
        question: '9852 + 5678<sup>2</sup> + 5449<sup>3</sup>',
        answer: 161821783385
    }, {
        question: '448<sup>3</sup> + 2256 + 4589<sup>2</sup>',
        answer: 110976569
    }, {
        question: '4412<sup>2</sup> + 987<sup>3</sup> + 1280',
        answer: 980971827
    }, {
        question: '899<sup>3</sup> + 567 + 2589<sup>2</sup>',
        answer: 733276187
    }, {
        question: '5561 + 1042<sup>2</sup> + 3787<sup>3</sup>',
        answer: 54311855728
    }, {
        question: '748<sup>3</sup> + 1130 + 2966<sup>2</sup>',
        answer: 427307278
    }, {
        question: '5596<sup>2</sup> + 421<sup>3</sup> + 1600',
        answer: 105935277
    }];


    var self = {};
    self.promptCounter = 2;

    self.initialize = function() {
        calculatorExercisesLength = calculatorExercises.length;
        setTimeout(self.redirection, (_timeToRedirect * 60) * 1000); // 60,000ms eq 1min
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
        rself.promptCounter = self.promptCounter + (_advertisementEnabled === true ? 5 : 0);
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
        wself.promptCounter = self.promptCounter + (_advertisementEnabled === true ? 5 : 0);
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


    function resetCalculator() {
        $('.btn[data-special="ac"]').click();
        currentResult = 0;
        $('#result').html(currentResult);
    }


    function setStats() {
        // do counter
        _countedClicks.push(_counter);
        _counter = 0;
        // do timestamps
        var tmp = _timestamp;
        _timestamp = Math.floor(Date.now() / 1000);
        _stamps.push(+(_timestamp - tmp));
    }

    self.kill = function() {
        _timeToRedirect = 99;
        intro.start();
        clearInterval(self.id);
    };

    function nextQuestion() {
        var exercise = calculatorExercises.pop();
            $('#check').attr('disabled', 'disabled');

        if (exercise !== undefined) {
            // is the app already intialized?
            if (_timestamp !== null) {
                setStats();
            } else {
                _timestamp = Math.floor(Date.now() / 1000);
            }

            $('#question').html(exercise.question);
            $('#check').data('value', exercise.answer);
            if (showAdvertisement !== undefined) {
                showAdvertisement();
            }
        } else {
            setStats();
            self.redirection(true);
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

    self.redirection = function(finished) {
        // variables
        var status = self.getStatus();

        // baseurl
        var href = "http://umfragen.ise.tu-darmstadt.de/sosci/iCalculator/";

        // parameters
        href += "?i=" + _userReference;
        href += "&password=test";
        href += "&ra=" + status.rA; // right answers
        href += "&qa=" + status.qA; // total questions
        href += "&tc=" + _countedClicksTotal; // total clicks

        setStats();
        // add exercise timestamps && clicks
        for (var i = 0; i < calculatorExercisesLength; i++) {
            if (_stamps[i] !== undefined && _countedClicks[i] !== undefined) {
                href += "&" + i + "s=" + _stamps[i];
                href += "&" + i + "c=" + _countedClicks[i];
            } else {
                href += "&" + i + "s=0";
                href += "&" + i + "c=0";
            }
        }

        // finished by questions
        if (finished === true) {
            href += "&fin=1";
        } else {
            href += "&fin=0";
        }


        $('#advert').hide();
        $('#redirected').show();
        $('#content').addClass('blurred');
        window.onbeforeunload = null;
        location.href = href;
    };

    self.showCountdown = function() {
        function toMin(secs) {
            var s = parseInt(secs % 60);
            return parseInt(secs / 60) + ":" + (s < 10 ? "0" : "") + s;
        }

        var self = {};
        self.counter = 60 * _timeToRedirect;
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
        site: 0
    };
    $('#content').addClass('blurred');

    self.next = function() {
        $($('#intro .item')[self.site]).hide();
        self.site += 1;
        if (self.site <= $('#intro .item').length - 1) {
            $($('#intro .item')[self.site]).show();
        } else {
            self.start();
        }
    };

    self.start = function() {
        $('#intro').hide();
        $('#content').removeClass('blurred');
        app.initialize();
    };

    return self;
}


if (!Date.now) {
    Date.now = function() {
        return new Date().getTime();
    };
}
