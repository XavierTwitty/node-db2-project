exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments("cars_id")
    table.text('vin').unique().notNullable();
    table.text('model', 20).notNullable()
    table.text('make', 20).unsigned().notNullable();
    table.decimal('mileage').notNullable()
    table.text("title", 128);
    table.text("transmission", 128);
})
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
  };
