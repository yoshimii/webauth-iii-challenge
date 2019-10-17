const db = require('../../data/dbConfig.js');

module.exports = {
  register,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'department').where('department', '=', 'management');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function register(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
