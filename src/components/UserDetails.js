import PropTypes from 'prop-types';
import React, { Component } from 'react';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    };
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  detailsSubmitted(e) {
    e.preventDefault();
    
    if(this.state.name) {
      this.props.detailsSubmitted(this.state.name);
    }
  }

  updateNameField(e) {
    const name = e.target.value;
    if (name) {
      this.setState({
        name: e.target.value,
      });
    }
  }

  render() {
    return (
      <form
        className="sc-user-details"
        onSubmit={this.detailsSubmitted.bind(this)}
      >
        <label
          htmlFor="name-field"
          className="sc-user-details-label"
        >
          Enter Name:
        </label>
        <input
          type="text"
          onChange={this.updateNameField.bind(this)}
          id="name-field"
          className="sc-user-details-input"
        />
        <input
          type="submit"
          value="Start Chat"
          className="sc-user-details-submit"
        />
      </form>
    );
  }
}

UserDetails.propTypes = {
  detailsSubmitted: PropTypes.func.isRequired,
};

export default UserDetails;
