var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    cors = require('cors');
    bodyParser = require('body-parser');

var responseTime = require('response-time')
const logger = require('./api/config/winston')
var counter = 0
app.use(responseTime())
app.use(cors());
app.use(bodyParser.json());

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mathdataRoutes = require('./api/routes/math'); //importing route
mathdataRoutes(app);
var gamedataRoutes = require('./api/routes/game'); //importing route
gamedataRoutes(app);
 //register the route file

 app.get('/', (req, res) => {
    res.send('Server is Up and Running').status(200);
    counter ++
 });
 //middleware added to check if user enters not found route
  app.use(function(req, res, next) {
    res.status(404).send({url:'Requested URL not found'})
  });
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;
    // add this line to include winston logging
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    // render the error page
    res.status(err.status || 500);
    res.status(500).send({error: `Error while fetching data`})
  });

app.listen(port);

const Logger = require("batch-cluster").Logger
const setLogger = require("batch-cluster").setLogger



setLogger(
   Logger.withLevels(
     Logger.withTimestamps(
       Logger.filterLevels(
         {
           trace: console.log,
           debug: console.log,
           info: console.log,
           warn: console.warn,
           error: console.error
         },
         "debug"
       )
     )
   )
 )

console.log(`Server RESTful API server started on : ${port}`);
