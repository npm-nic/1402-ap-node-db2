exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.string("vin", 17).notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();

    table.unique(["vin", "make", "model", "mileage"]);

    // --> non-required columns <-- //
    table.string("transmission");
    table.string("title");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
