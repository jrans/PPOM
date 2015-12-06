
exports.up = function(knex, Promise) {

  return knex.schema.createTable('party', function (table) {
    table.string('name').unique().primary().notNullable();
  });
};

exports.down = function(knex, Promise) { throw new Error("no revert"); };
