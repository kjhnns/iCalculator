var React = require('react');


var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
      <head>
          <title>ISE</title>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <script src="/lib/react/react.js"></script>
          <script src="/lib/react-bootstrap/react-bootstrap.min.js"></script>
          <script src="/template/lib/jquery.min.js"></script>
          <script src="/template/lib/skel.min.js"></script>
          <script src="/template/lib/skel-layers.min.js"></script>
          <script src="/template/lib/init.js"></script>
          <script src="/template/lib/calculator.js"></script>
          <link rel="stylesheet" href="/template/stylesheets/custom.css" />
      </head>

      <body id="top">
          <div id="root">
            {this.props.children}
            <a href="https://www.soscisurvey.de/projekt?i={this.props.reference}">weiter</a>
          </div>
          <script src="/template/lib/custom.js"></script>
      </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
