const express = require("express");
const { logger } = require("./cars/cars-middleware");
const carsRouter = require('./cars/cars-router');
const server = express()

server.use(express.json());
server.use('/api/cars', logger,carsRouter);

server.get("/", (req, res) => {
    res.send("<h2> building a api <h2/>");
  });

  server.use('*', (req, res) => {
    // catch all 404 errors middleware
    res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
  });

  server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500). json({
      message: err.message,
      stack: err.stack
    })
  })

module.exports = server
