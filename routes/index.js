
var controller = {
    'index': function(req, res, next) {
        res.render('index');
    },
    'premium': function(req, res, next) {

        res.render('setting', {
            mode: req.params.mode,
            reference: req.params.reference,
            premium: true,
            advertisement: false,
            question: function() { return {__html: '125<sup>4</sup> + 24 × 1999'}; },
            answer: 244188601
        });
    },
    'basis': function(req, res, next) {
        res.render('setting', {
            premium: false,
            advertisement: false,
            question: function() { return {__html: '125<sup>4</sup> + 24 × 1999'}; },
            answer: 244188601
        });
    },
    'advertisement': function(req, res, next) {
        res.render('setting', {
            premium: true,
            advertisement: true,
            question: function() { return {__html: '125<sup>4</sup> + 24 × 1999'}; },
            answer: 244188601
        });
    }
};

module.exports = function(app) {
    app.get('/', controller.index);
    app.get('/premium/:reference/:mode', controller.premium);
    app.get('/basis', controller.basis);
    app.get('/advertisement', controller.advertisement);
};
