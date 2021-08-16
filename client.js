const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    conn.write('Name: DNY');
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  setupInput();
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write(('Move: up'));
  //   }, 50);
  // });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}



module.exports = { connect };