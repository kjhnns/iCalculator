<?php
function _shutdown() {
   echo "</body></html>";
}
register_shutdown_function("_shutdown");
?>
<!DOCTYPE HTML>
<!--
   Ion by TEMPLATED
   templated.co @templatedco
   Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
   <head>
      <title>Prototype</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <!--[if lte IE 8]><script src="template/lib/html5shiv.js"></script><![endif]-->
      <script src="template/lib/jquery.min.js"></script>
      <script src="template/lib/skel.min.js"></script>
      <script src="template/lib/skel-layers.min.js"></script>
      <script src="template/lib/init.js"></script>
      <script src="template/lib/calculator.js"></script>
      <link rel="stylesheet" href="template/stylesheets/custom.css" />
      <noscript>
         <link rel="stylesheet" href="template/stylesheets/skel.css" />
         <link rel="stylesheet" href="template/stylesheets/style.css" />
         <link rel="stylesheet" href="template/stylesheets/style-xlarge.css" />
      </noscript>
   </head>
   <body id="top" style="min-width: 1024px; overflow: scroll;">