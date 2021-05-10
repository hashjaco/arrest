import {
  validEmail,
  validName,
  validPassword,
  validPhoneNumber,
} from './constants';

export const validateEmail = (email) => {
  const trimmed = email.trim();
  return trimmed.length > 0 && validEmail.test(trimmed);
};

export const validatePhoneNumber = (phoneNumber) => {
  const trimmed = phoneNumber.trim();
  return trimmed.length > 9 && validPhoneNumber.test(trimmed);
};

export const validateName = (name) => {
  const trimmed = name.trim();
  return trimmed.length > 0 && validName.test(trimmed);
};

export const validatePassword = (password) => {
  const trimmed = password.trim();
  return (
    trimmed.length > 7 && trimmed.length < 33 && validPassword.test(trimmed)
  );
};

export const isDigit = (char) => !Number.isNaN(char + 0);
