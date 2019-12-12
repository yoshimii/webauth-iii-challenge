
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Sadie', password: 'password1', department: 'management'},
        {username: 'Ben', password: 'password2', department: 'accounting'},
        {username: 'Alice', password: 'password3', department: 'devOps'}
      ]);
    });
};
