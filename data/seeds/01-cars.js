// STRETCH
const cars = [
    {
      vin: "11111141111111151",
      make: "toyota",
      model: "prius",
      mileage: 234000,
      title: "clean",
      transmission: "manual",
    },
    {
      vin: "21111111111111111",
      make: "honda",
      model: "prius",
      mileage: 234000,
      title: "clean",
    },
    {
      vin: "21411111111111111",
      make: "ford",
      model: "focus",
      mileage: 234000,
      transmission: "Automatic",

    }
];

exports.seed = async function (knex) {
    return knex("cars")
    .truncate().then(function () {
        return knex('cars').insert(cars)
    })
  };