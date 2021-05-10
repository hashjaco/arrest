export const TypeError = () => new Error('Incorrect data type passed into function');

export const NullArgumentError = () => new Error(
  'A non-null and non-empty argument must be passed in as an argument'
);

export const BadFormatError = () => new Error('Argument passed in is not in a valid format');
