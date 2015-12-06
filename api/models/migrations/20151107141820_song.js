
exports.up = function(knex, Promise) {

  return knex.schema.createTable('song', function (table) {
    table.uuid('id').unique().primary().notNullable();
    table.string('artist').notNullable();
    table.string('title').notNullable();
    table.string('artist_image').notNullable();
    table.string('album_image').notNullable();
    table.string('url').notNullable();
    table.integer('hits').notNullable().defaultTo(0);
    table.enu('type', ['suggestion','playlist','played']).defaultTo('suggestion').notNullable();
    table.string('party_name').references('party.name').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) { throw new Error("no revert"); };
