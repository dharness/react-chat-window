'use strict';

var MESSAGE_TYPES = {
  CLIENT: {
    NEW_VISITOR: 'client.new_visitor',
    MESSAGE: 'client.message',
    RETURNING_VISITOR: 'client.returning_visitor'
  },
  BROKER: {
    VISITOR_ID: 'broker.visitor_id',
    MESSAGE: 'broker.message'
  }
};

module.exports = MESSAGE_TYPES;