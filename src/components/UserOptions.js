import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class UserOptions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
    };
  }

  toggleOptions() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,    
    }));
  }

  endChat() {
    this.setState({
      toggled: false,
    });
    this.props.endChat();
  }

  render() {
    const userOptionsListClasses = classNames(
      'sc-user-options__list',
      {'sc-user-options__list--visible': this.state.toggled},
    );

    return (
      <Fragment>
        <div
          className="sc-user-options__toggle"
          onClick={this.toggleOptions.bind(this)}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
        <div className={userOptionsListClasses}>
          <ul>
            <li onClick={this.endChat.bind(this)}>End Chat</li>
          </ul>
        </div>
      </Fragment>  
    );
  }
}

UserOptions.propTypes = {
  endChat: PropTypes.func.isRequired,
};

export default UserOptions;
