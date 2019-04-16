
'use strict';

exports.mathFunc = function(req, res) {
  res.json({
    Output: calculate(req)
  })
};

function calculate(req) {
    let type = req.query.type
      switch(type) {
        case "add":
          return req.query.int1 + req.query.int2
        break;

        case "sub":
          return req.query.int1 - req.query.int2
        break;

        case "mul":
          return req.query.int1 * req.query.int2
        break;

        case "div":
          return req.query.int1 / req.query.int2
        break;

      }
    return filePath
}
