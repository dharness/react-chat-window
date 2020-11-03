import PropTypes from 'prop-types';
import { get } from 'lodash';
import React, { Component } from 'react';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      orderDetails: null,
    };
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  detailsSubmitted(e) {
    e.preventDefault();
    
    if(this.state.name) {
      this.props.detailsSubmitted(this.state.name, this.state.orderDetails);
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

  render() {
    const { startScreenFields } = this.props;
    return (
      <form
        className="sc-user-details"
        onSubmit={this.detailsSubmitted.bind(this)}
      >
        <label
          htmlFor="name-field"
          className="sc-user-details-label"
        >
          Your Name:
        </label>
        {get(startScreenFields, 'name') 
          ? (
            <input
              type="text"
              onChange={this.updateNameField.bind(this)}
              id="name-field"
              className="sc-user-details-input"
            />
          ) : null}
        {get(startScreenFields, 'orderNumber') 
          ? (
            <input
              type="text"
              onChange={this.updateOrderNumberField.bind(this)}
              id="order-number-field"
              className="sc-user-details-input"
            />
          ) : null}
        <input
          type="submit"
          value="Start chat"
          className="sc-user-details-submit"
        />
      </form>
    );
  }
}

UserDetails.propTypes = {
  detailsSubmitted: PropTypes.func.isRequired,
  startScreenFields: PropTypes.object,
};

export default UserDetails;
