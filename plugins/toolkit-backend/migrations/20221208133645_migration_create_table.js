/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('toolkit', table => {
    table.increments('id').primary().unsigned().unique();
    table.string('title').notNullable().defaultTo('Untitled').index();
    table.text('url').notNullable();
    table.text('logo').notNullable();
    table.string('owner').notNullable();
    table.enu('type', ['public', 'private']).defaultTo('public');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    //   t.timestamp('deleted_at').defaultTo(null)
  });
  await knex.schema.createTable('toolkit_item', table => {
    table.increments('id').primary().unsigned().unique();
    table.integer('toolkit').references('id').inTable('toolkit').notNullable().onDelete('CASCADE');
    table.boolean('isPrivate').notNullable().defaultTo(false);
    table.string('user').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('toolkit');
};
