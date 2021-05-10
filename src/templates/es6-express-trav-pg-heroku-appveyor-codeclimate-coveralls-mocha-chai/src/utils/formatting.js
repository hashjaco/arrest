import { isDigit } from './validation';
import { NullArgumentError, TypeError } from './errorTypeFunctions';

export const formatName = (name) => {
  if (!name) {
    return undefined;
  }
  const nameArray = name.split('');
  nameArray.map((char, index) => (index === 0 ? char.toUpperCase() : char.toLowerCase()));

  return nameArray.join('');
};

/** @function formatPhoneNumber
 * @description inserts hyphen dividers into phone number on change
 * @returns boolean|string
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (typeof phoneNumber !== 'string') {
    return TypeError();
  }
  if (!phoneNumber || phoneNumber.length === 0) {
    return NullArgumentError();
  }

  let number = phoneNumber.trim();
  const size = number.length;
  const lastChar = number[size - 1];
  if (size !== 8 && size !== 4) {
    if (!isDigit(lastChar)) {
      return TypeError();
    }

    if (number.length === 3 || number.length === 7) {
      number += '-';
    }
  }

  return number;
};
