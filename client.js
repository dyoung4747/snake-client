const net = require('net');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write(key)
  })
}

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