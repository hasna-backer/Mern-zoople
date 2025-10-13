let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export const getAllUsers = () => users;

export const addUser = (name) => {
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, name) => {
  const user = users.find(u => u.id === id);
  if (!user) return null;
  user.name = name;
  return user;
};

export const deleteUser = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};
