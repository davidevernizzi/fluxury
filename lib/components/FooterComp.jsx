'use strict';

var React = require('react'),
  Link = require('react-router').Link,
  Footer;

Footer = React.createClass({
  render: function() {
    return (
      <div>
        <footer>
          <Link to="contact">Contact</Link>
        </footer>
      </div>
    );
  }
});

module.exports = Footer;
