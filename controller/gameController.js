
'use strict';
const gm = require('gm');
const width = 300;
const height = 400;


exports.gameFunc = function(req, res) {
  const { width, height } = req.params; // Get the width and height from the request parameters
  gm('/path/to/image/file')
      .crop(width, height)
      .write('./tmp.png', (err) => {
        if (err) {
          console.log(err);
        } else {
          response.sendFile('./tmp.png');
        }
      })

     fs.unlinkSync('./tmp.png'); // Delete the temporary file tha
};
