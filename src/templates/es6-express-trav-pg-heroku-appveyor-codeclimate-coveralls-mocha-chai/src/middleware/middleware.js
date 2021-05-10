import { validateName, isDigit } from '../utils/validation';

export const validateUser = (req, res, next) => {
  const { firstName, lastName, age } = req.body;
  if (validateName(firstName) && validateName(lastName) && !isDigit(age)) next();
  return res.status(406).json({
    error:
      'Invalid user information provided. Please double-check your inputs (:',
  });
};
