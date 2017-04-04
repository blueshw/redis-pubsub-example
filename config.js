var NRP    = require('node-redis-pubsub');

var config = {
  port: 6379,
  host: '127.0.0.1',
  auth: 'albertcode_password', // Password
  scope: 'albetcode'           // Use a scope to prevent two NRPs from sharing messages
};

module.exports = new NRP(config); 
