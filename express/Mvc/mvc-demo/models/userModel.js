
// ------------------ USER MODEL ------------------
// Our "database" is just an array in memory (not permanent).

const users = [];

// Create a function to add a new user
function addUser(username, password) {
  const user = {
    id: users.length + 1,   // give an id (1,2,3,...)
    username: username,
    password: password
  };
  users.push(user);
  return user;
}

// Create a function to find a user by username
function findUser(username) {
  return users.find(function(u) {
    return u.username === username;
  });
}

// Export functions so other files can use them
module.exports = {
  addUser: addUser,
  findUser: findUser
};
