var React = require('react');


var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
      <head>
          <title>ISE</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <script src="template/lib/jquery.min.js"></script>
          <script src="template/lib/skel.min.js"></script>
          <script src="template/lib/skel-layers.min.js"></script>
          <script src="template/lib/init.js"></script>
          <script src="template/lib/calculator.js"></script>
          <link rel="stylesheet" href="template/stylesheets/custom.css" />
      </head>

      <body id="top">
          {this.props.children}
      </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
