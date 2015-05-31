

// var ReactAdvertisement = React.createClass({displayName: "AdvertisementClass",
//   getInitialState: function() {
//     return {
//       secondsRemaining: this.props.secondsRemaining
//     };
//   },
//   tick: function() {
//     this.setState({secondsRemaining: this.state.secondsRemaining - 1});
//     if (this.state.secondsRemaining <= 0) {
//       React.unmountComponentAtNode(this.getDOMNode().parentNode);
//       clearInterval(this.interval);
//     }
//   },
//   componentDidMount: function() {
//     this.setState({ secondsRemaining: this.props.secondsRemaining });
//     this.interval = setInterval(this.tick, 1000);
//   },
//   componentWillUnmount: function() {
//     clearInterval(this.interval);
//   },
//   render: function() {
//     return (
//         React.createElement("div", {className: "dimmed"},
//            React.createElement("div", {className: "container"},
//               React.createElement("div", {className: "row"},
//                  React.createElement("div", {className: "8u -2u"},
//                  React.createElement("br", null), React.createElement("br", null),
//                     React.createElement("section", {className: "special box", style: {'backgroundColor': '#fff'}},
//                     React.createElement("h1", null, "Fahre Sie in die Schweiz!"),
//                     React.createElement("a", {href: "#", className: "image fit"}, React.createElement("img", {src: "template/images/pic03.jpg", alt: ""})),
//                     React.createElement("i", null, "Werbeanzeige verschwindet in ", React.createElement("span", null, this.state.secondsRemaining), " Sekunden ")
//                     )
//                  )
//               )
//            )
//         )
//     );
//   }
// });

// React.render(
//   React.createElement(ReactAdvertisement, {secondsRemaining: 10}),
//   document.querySelector('#advertisement')
// );
