const Car = require('./cars-model');
const router = require('express').Router();
const {checkCarId, 
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid } = require("./cars-middleware")

    router.get('/', (req, res) => {
        Car.getAll()
          .then(cars => {
            res.json(cars);
          })
          .catch(err => {
            res.status(500).json({ 
                message: 'Failed to retrieve cars' ,
                err: err.message
      
              });
          });
      }) 
      
      router.get("/:id", checkCarId, async (req, res , next) => {
        try {
          const car = await Car.getById(req.params.id);
          res.status(200).json(car);
        } catch (err) {
          next(err);
        }
      });
      
module.exports = router
