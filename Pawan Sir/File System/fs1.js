var fs = require('fs');
// fs.writeFileSync('read.txt','Welcome to file');
// fs.appendFileSync('read.txt',' My name is Piyush');
fs.readFile('read.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });