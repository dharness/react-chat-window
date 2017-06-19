import MESSAGE_TYPES from './../messageTypes';
const CLIENT = MESSAGE_TYPES.CLIENT;
const BROKER = MESSAGE_TYPES.BROKER;
const SOCKET_URL = process.env.SC_SOCKET_URL;
const io = require('socket.io-client');


const messageBroker = {

  init() {
    const socket = io(SOCKET_URL);
    this.socket = socket;
    this.messageRecievedHandlers = [];
    socket.on(BROKER.VISITOR_ID, this.setVisitorId);
    socket.on(BROKER.MESSAGE, this.handleIncomingMessage.bind(this));
    const visitorId = this.getVisitorId();
    const teamId = this.getTeamId();

    if (!visitorId) {
      socket.emit(CLIENT.NEW_VISITOR, { teamId });
    } else { socket.emit(CLIENT.RETURNING_VISITOR, { visitorId, teamId }); }
  },

  sendMessage(msg) {
    msg.visitorId = this.getVisitorId();
    msg.teamId = this.getTeamId();
    this.socket.emit(CLIENT.MESSAGE, msg);
  },

  handleIncomingMessage(msg) {
    this.messageRecievedHandlers.forEach(handle => handle(msg));
  },

  onMessageReceived(handler) {
    this.messageRecievedHandlers.push(handler);
  },

  getVisitorId() {
    return 1;
  },

  getTeamId() {
    return 1;
  },

  getTeamName() {
    return 1;
  },

  getImageUrl() {
    return 1;
  },

  setVisitorId(data) {
    localStorage.setItem('SLACKCHAT.VISITOR_ID', data.visitorId);
  }
};

export default messageBroker;