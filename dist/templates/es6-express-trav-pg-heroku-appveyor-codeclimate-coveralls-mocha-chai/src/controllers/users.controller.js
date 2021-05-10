import Model from '../models/model';

const userModel = new Model('users');

export const getUsers = async (req, res) => {
  const { columns } = req.body;
  try {
    const data = await userModel.select('*');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ error: err.stack });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const { columns } = req.body;
  try {
    const data = await userModel.select(columns, `WHERE id = ${id}`);
    res.status(200).json({ user: data.rows });
  } catch (err) {
    res.status(200).json({ error: err.stack });
  }
};

export const addUser = async (req, res) => {
  const { firstName, lastName, age, birthdate } = req.body;

  const columns = 'first_name, last_name, age, birthdate';
  const values = `${firstName}, ${lastName}, ${age}, ${birthdate}`;

  try {
    const data = await userModel.insertWithReturn(columns, values);
    res.status(200).json({ user: data.rows });
  } catch (err) {
    res.status(200).json({ error: err.stack });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

}
