var React = require('react');
var DefaultLayout = require('./layouts/default');
var Calculator = require('./calculator');

var advertisement = (
            <div className="dimmed" id="advert">
               <div className="container">
                  <div className="row">
                     <div className="8u -2u">
                     <br/><br/>
                        <section className="special box" style={{'background-color': '#fff'}}>
                        <h1>Fahre Sie in die Schweiz!</h1>
                        <a href="#" className="image fit"><img src="template/images/pic03.jpg" alt="" /></a>
                        <i>Werbeanzeige verschwindet in <span id="sec">10</span> Sekunden </i>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
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
         );

var Premium = React.createClass({

  render: function() {
    return (
      <DefaultLayout>
         {this.props.advertisement ? advertisement : ''}
         <Calculator premium={this.props.premium} question={this.props.question} answer={this.props.answer}></Calculator>
      </DefaultLayout>
    );
  }
});

module.exports = Premium;
