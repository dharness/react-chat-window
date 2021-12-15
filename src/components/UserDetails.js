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
      numberOfItemsToCollect: null,
      optionalField: null,
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
      numberOfItemsToCollect,
      optionalField,
    } = this.state;

    e.preventDefault();

    let fieldsValidCount = 0;

    
    if (name && name.length) fieldsValidCount++;
    if (email && email.length) fieldsValidCount++;
    if (orderNumber && orderNumber.length) fieldsValidCount++;
    if (optionalField && optionalField.length) fieldsValidCount++;
    if (numberOfItemsToCollect && numberOfItemsToCollect.length) fieldsValidCount++;
    
    if (fieldsValidCount >= 2) {
      this.props.detailsSubmitted(name, orderNumber, email, numberOfItemsToCollect, optionalField);
    }
  }

  updateNameField(e) {
    const name = e.target.value || '';
    this.setState({
      name: name,
    });
  }

  updateOrderNumberField(e) {
    const orderNumber = e.target.value || '';
    this.setState({
      orderNumber: orderNumber,
    });
  }

  updateNoOfItemsToCollect(e) {
    const numberOfItemsToCollect = e.target.value || '';
    this.setState({
      numberOfItemsToCollect: numberOfItemsToCollect,
    });
  }

  updateEmailField(e) {
    const email = e.target.value || '';
    this.setState({
      email: email,
    });
  }

  updateOptionalField(e) {
    const optionalField = e.target.value || '';
    this.setState({
      optionalField: optionalField,
    });
  }

  render() {
    const { startScreenFields, startChatButtonValue, fieldLabels } = this.props;

    return (
      <form
        className="sc-user-details"
        onSubmit={this.detailsSubmitted.bind(this)}
        autoComplete="off"
      >
        {get(startScreenFields, 'name') 
          ? (
            <Fragment>
              <label
                htmlFor="name-field"
                className="sc-user-details-label"
              >
                {fieldLabels.name ? `${fieldLabels.name}:` : 'Your Name:' }
              </label>
              <input
                type="text"
                onChange={this.updateNameField.bind(this)}
                id="name-field"
                className="sc-user-details-input"
                autoComplete="off"
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
                {fieldLabels.email ? `${fieldLabels.email}:` : 'Email Address:' }
              </label>
              <input
                type="email"
                onChange={this.updateEmailField.bind(this)}
                id="email-field"
                className="sc-user-details-input"
                autoComplete="off"
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
                {fieldLabels.orderNumber ? `${fieldLabels.orderNumber}:` : 'Order Number:' }
              </label>
              <input
                type="text"
                onChange={this.updateOrderNumberField.bind(this)}
                id="order-number-field"
                className="sc-user-details-input"
                autoComplete="off"
                placeholder={fieldLabels.orderNumberPlaceholder ? fieldLabels.orderNumberPlaceholder : ''}
              />
            </Fragment>
          ) : null}
        {get(startScreenFields, 'numberOfItemsToCollect') 
          ? (
            <Fragment>
              <label
                htmlFor="no-of-items-to-collect"
                className="sc-user-details-label"
              >
                {fieldLabels.noItemsToCollect ? `${fieldLabels.noItemsToCollect}:` : 'No of items to collect:' }
              </label>
              <input
                type="number"
                onChange={this.updateNoOfItemsToCollect.bind(this)}
                id="no-of-items-to-collect"
                className="sc-user-details-input"
                autoComplete="off"
              />
            </Fragment>
          ) : null}
        {get(startScreenFields, 'optionalField') 
          ? (
            <Fragment>
              <label
                htmlFor="optional-field"
                className="sc-user-details-label"
              >
                {fieldLabels.optionalField ? `${fieldLabels.optionalField}:` : '' }
              </label>
              <input
                type="text"
                onChange={this.updateOptionalField.bind(this)}
                id="optional-field"
                className="sc-user-details-input"
                autoComplete="off"
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
