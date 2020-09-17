import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class UserOptions extends Component {

  render() {
    const { endChat } = this.props;

    return (
      <Fragment>
        <FontAwesomeIcon icon={faEllipsisH} />
        <div>
          <ul>
            <li onClick={endChat}>End Chat</li>
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
