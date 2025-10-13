// Our "database" is just an array in memory (not permanent).
const users = [];

// Create a function to add a new user
function addUser(username, password) {
  // Make a new user object
  const user = {
    id: users.length + 1,   // give an id (1,2,3,...)
    username: username,     // same as the username we got
    password: password      // same as the password we got
  };

  // Save this user into the array
  users.push(user);

  // Return the new user so we know what was added
  return user;
}

// Create a function to find a user by username
function findUser(username) {
  // Go through the users array and return the first match
  return users.find(function(u) {
    return u.username === username;
  });
}

// Export (make available) the functions so other files can use them
module.exports = {
  addUser: addUser,
  findUser: findUser
};
