  //index.js

  var fs = require('fs');
  var colors = require('colors');

  var path = './';
  console.log(path.blue);

  fs.readdir(path, function(err, items) {
      console.log(items);

      for (var i=0; i<items.length; i++) {
          console.log(items[i]);
      }

      fs.appendFile('message', items +',\n', function() {
          if (err) throw err;
          console.log('The file has been saved!'.green);

        });
  });
