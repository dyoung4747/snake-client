let connection;

const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
      console.log('up');
    } else if (key === 'a') {
      connection.write('Move: left');
      console.log('left');
    } else if (key === 's') {
      connection.write('Move: down');
      console.log('down');
    } else if (key === 'd') {
      connection.write('Move: right');
      console.log('right');
    } else if (key === '`') {
      connection.write('Say: You won\'t beat me!');
    } else if (key === '1') {
      connection.write('Say: You\'re going downnnnn...');
    } else if (key === '2') {
      connection.write('Say: You got lucky...');
    } else if (key === '3') {
      connection.write('Say: HAHA I win!');
    }
  }

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

module.exports = { setupInput };