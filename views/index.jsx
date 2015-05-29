var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
         <section className="wrapper style1">
            <div className="container">
               <div className="row">
                  <div className="8u">
                     <section>
                        <h2>Worum geht es</h2>
                        <p>Hallo accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan commodo odio cubilia ac eu interdum placerat placerat arcu commodo lobortis adipiscing semper ornare pellentesque.</p>
                     </section>
                  </div>
                  <div className="4u">
                     <section>
                        <h3>&nbsp;</h3>
                        <ul className="actions">
                           <li><a href="premium" className="button alt">Premiumversion</a></li>
                        </ul>
                        <ul className="actions">
                           <li><a href="basis" className="button alt">Basisversion</a></li>
                        </ul>
                        <ul className="actions">
                           <li><a href="advertisement" className="button alt">Advertisement</a></li>
                        </ul>
                     </section>
                  </div>
               </div>
            </div>
         </section>

      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
