
exports.up = function(knex) {
  return knex.schema.createTable('users', user => {
    user.increments();
    user.string('username')
        .notNullable()
        .unique()
    user.string('password')
        .notNullable()
    user.string('department')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists('users')
};
