var React = require('react');
var DefaultLayout = require('./layouts/default');
var Calculator = require('./calculator');




var AdvertisementClass = React.createClass({
  getInitialState: function() {
    return {
      showAdvert: true,
      secondsRemaining: this.props.secondsRemaining
    };
  },
  // tick: function() {
  //   console.log('test');
  //   this.setState({secondsRemaining: this.state.secondsRemaining - 1});
  //   if (this.state.secondsRemaining <= 0) {
  //     this.state.showAdvert = false;
  //     clearInterval(this.interval);
  //   }
  // },
  // componentDidMount: function() {
  //   console.log('test');
  //   this.setState({ secondsRemaining: this.props.secondsRemaining });
  //   this.interval = setInterval(this.tick, 1000);
  // },
  // componentWillUnmount: function() {
  //   console.log('test');
  //   clearInterval(this.interval);
  // },
  render: function() {
    return (
        <div className="dimmed" id="advert" style={{'display': this.state.showAdvert}}>
           <div className="container">
              <div className="row">
                 <div className="8u -2u">
                 <br/><br/>
                    <section className="special box" style={{'backgroundColor': '#fff'}}>
                    <h1>Fahre Sie in die Schweiz!</h1>
                    <a href="#" className="image fit"><img src="template/images/pic03.jpg" alt="" /></a>
                    <i>Werbeanzeige verschwindet in <span id="sec">{this.state.secondsRemaining}</span> Sekunden </i>
                    </section>
                 </div>
              </div>
           </div>
        </div>
    );
  }
});

var result = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
         { this.props.advertisement ? <AdvertisementClass secondsRemaining="10" />  : '' }
         <Calculator premium={this.props.premium} question={this.props.question} answer={this.props.answer}></Calculator>
      </DefaultLayout>
    );
  }
});

module.exports = result;
