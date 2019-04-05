import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <header className="uk-margin" uk-margin="true">
        <h1 className="uk-text-center">{this.props.title}</h1>
      </header>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header;
