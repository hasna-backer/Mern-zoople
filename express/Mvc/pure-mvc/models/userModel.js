
// ---------------- USER MODEL ----------------
// Stores and retrieves user data (in-memory)

const users = [];

function addUser(username, password) {
  const user = { id: users.length + 1, username, password };
  users.push(user);
  return user;
}

function findUser(username) {
  return users.find(function(u) {
    return u.username === username;
  });
}

module.exports = { addUser, findUser };
