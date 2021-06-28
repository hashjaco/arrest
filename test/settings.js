import chai from 'chai';
import sinonChai from 'sinon-chai';
import ask from '../src/helpers/ask';

chai.use(sinonChai);
const { expect } = chai;

module.exports = {
  expect,
  ask,
};
