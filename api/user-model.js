const db = require('../data/dbConfig.js');

module.exports = {
    register,
    // login,
    // getUsers
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