var React = require('react');
var DOM = React.DOM;
var DefaultLayout = require('./layouts/default');
var Calculator = require('./calculator');


// var SetIntervalMixin = {
//   componentWillMount: function() {
//     this.intervals = [];
//   },
//   setInterval: function() {
//     this.intervals.push(setInterval.apply(null, arguments));
//   },
//   componentWillUnmount: function() {
//     this.intervals.map(clearInterval);
//   }
// };

// var AdvertisementClass = React.createClass({
//   mixins: [SetIntervalMixin],
//   getInitialState: function() {
//     return {
//       secondsRemaining: this.props.secondsRemaining
//     };
//   },
//   tick: function() {
//     console.log('test');
//     this.setState({secondsRemaining: this.state.secondsRemaining - 1});
//     if (this.state.secondsRemaining <= 0) {
//       React.unmountComponentAtNode(this.getDOMNode().parentNode);
//     }
//   },
//   componentDidMount: function() {
//     console.log('test');
//     this.setState({ secondsRemaining: this.props.secondsRemaining });
//     this.setInterval(this.tick, 1000);
//   },
//   componentWillUnmount: function() {
//     console.log('test');
//     clearInterval(this.interval);
//   },
//   render: function() {
//     return (
//         <div className="dimmed" id="advert">
//            <div className="container">
//               <div className="row">
//                  <div className="8u -2u">
//                  <br/><br/>
//                     <section className="special box" style={{'backgroundColor': '#fff'}}>
//                     <h1>Fahre Sie in die Schweiz!</h1>
//                     <a href="#" className="image fit"><img src="template/images/pic03.jpg" alt="" /></a>
//                     <i>Werbeanzeige verschwindet in <span id="sec">{this.state.secondsRemaining}</span> Sekunden </i>
//                     </section>
//                  </div>
//               </div>
//            </div>
//         </div>
//     );
//   }
// });

var result = React.createClass({
  render: function() {
    return (
      <DefaultLayout reference={this.props.reference}>
          { this.props.advertisement ?  <div id="advertisement"></div> : '' }
          <Calculator premium={this.props.premium} question={this.props.question} answer={this.props.answer}></Calculator>
      </DefaultLayout>
    );
  }
});

module.exports = result;
