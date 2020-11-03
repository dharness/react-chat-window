import PropTypes from 'prop-types';
import { get } from 'lodash';
import React, { Component, Fragment } from 'react';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      orderNumber: null,
      email: null,
    };
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  detailsSubmitted(e) {
    const {
      name,
      orderNumber,
      email,
    } = this.state;
    const { startScreenFields } = this.props;

    e.preventDefault();

    const nameFieldRequired = get(startScreenFields, 'name');
    const emailFieldRequired = get(startScreenFields, 'email');
    const orderNumberFieldRequired = get(startScreenFields, 'orderNumber');

    const nameFieldValid = nameFieldRequired ? name && name.length : true;
    const emailFieldValid = emailFieldRequired ? email && email.length : true;
    const orderNumberFieldValid = orderNumberFieldRequired ? orderNumber && orderNumber.length : true;
    
    if (nameFieldValid && emailFieldValid && orderNumberFieldValid) {
      this.props.detailsSubmitted(name, orderNumber, email);
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

  updateOrderNumberField(e) {
    const orderNumber = e.target.value;
    if (orderNumber) {
      this.setState({
        orderNumber: e.target.value,
      });
    }
  }

  updateEmailField(e) {
    const email = e.target.value;
    if (email) {
      this.setState({
        email: e.target.value,
      });
    }
  }

  render() {
    const { startScreenFields, startChatButtonValue } = this.props;

    return (
      <form
        className="sc-user-details"
        onSubmit={this.detailsSubmitted.bind(this)}
      >
        {get(startScreenFields, 'name') 
          ? (
            <Fragment>
              <label
                htmlFor="name-field"
                className="sc-user-details-label"
              >
                Your Name:
              </label>
              <input
                type="text"
                onChange={this.updateNameField.bind(this)}
                id="name-field"
                className="sc-user-details-input"
              />
            </Fragment>
          ) : null}
        {get(startScreenFields, 'email') 
          ? (
            <Fragment>
              <label
                htmlFor="email-field"
                className="sc-user-details-label"
              >
                Email Address:
              </label>
              <input
                type="text"
                onChange={this.updateEmailField.bind(this)}
                id="email-field"
                className="sc-user-details-input"
              />
            </Fragment>
          ) : null}
        {get(startScreenFields, 'orderNumber') 
          ? (
            <Fragment>
              <label
                htmlFor="order-number-field"
                className="sc-user-details-label"
              >
                Order Number:
              </label>
              <input
                type="text"
                onChange={this.updateOrderNumberField.bind(this)}
                id="order-number-field"
                className="sc-user-details-input"
              />
            </Fragment>
          ) : null}
        <input
          type="submit"
          value={startChatButtonValue ? startChatButtonValue : 'Start chat' }
          className="sc-user-details-submit"
        />
      </form>
    );
  }
}

UserDetails.propTypes = {
  detailsSubmitted: PropTypes.func.isRequired,
  startScreenFields: PropTypes.object,
  startChatButtonValue: PropTypes.string,
};

export default UserDetails;
