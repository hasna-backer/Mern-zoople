import { getAllUsers, addUser, updateUser, deleteUser } from '../models/userModel.js';

export const getUsers = (req, res) => {
  res.json(getAllUsers());
};

export const createUser = (req, res) => {
  const { name } = req.body;
  const newUser = addUser(name);
  res.status(201).json(newUser);
};

export const editUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updated = updateUser(id, name);

  if (!updated) return res.status(404).json({ message: 'User not found' });
  res.json(updated);
};

export const removeUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteUser(id);

  if (!deleted) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully' });
};
