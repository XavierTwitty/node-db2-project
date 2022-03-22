const db = require('../../data/db-config')


const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  return db('cars').where('cars_id', id).first();
}

const create = () => {
  // DO YOUR MAGIC
}

const getByVin = async (vin) => {
  return db('cars').where('vin', vin).first();
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}