import Options from '../src/helpers/options';
import { expect } from './settings';

describe('Options class methods', () => {
  const op = new Options();

  describe('getLanguages', () => {
    it('should return the programming languages listed in the languages directory', (done) => {
      const languages = op.getLanguages();
      expect(languages).to.not.eql(undefined);
      expect(typeof languages).to.equal('object');
      expect(languages.length).to.be.gt(0);
      expect(languages).to.include('nodejs');
      expect(languages).to.include('python');
      done();
    });
  });

  describe('getFrameworks', () => {
    it('should return the frameworks in respect to chosen language', (done) => {
      const frameworks = op.getFrameworks('nodejs');
      expect(frameworks).to.not.eql(undefined);
      expect(typeof frameworks).to.equal('object');
      expect(frameworks.length).to.be.gt(0);
      expect(frameworks).to.include('express');
      done();
    });

    it('should throw an error', (done) => {
      const frameworks = op.getFrameworks('dragon');
      expect(frameworks).to.eql(undefined);
      done();
    });
  });

  describe('getCiCdOptions', () => {
    it('should return continuous integration continuous development', (done) => {
      const ciCdOptions = op.getCiCdOptions();
      expect(ciCdOptions).to.not.eql(undefined);
      expect(typeof ciCdOptions).to.equal('object');
      expect(ciCdOptions.length).to.be.gt(0);
      expect(ciCdOptions).to.include('travis-ci');
      expect(ciCdOptions).to.include('circle-ci');
      done();
    });
  });

  describe('getCodeCoverageOptions', () => {
    it('should return options for code quality coverage', (done) => {
      const codeCoverageOptions = op.getCodeCoverageOptions();
      expect(codeCoverageOptions).to.not.eql(undefined);
      expect(typeof codeCoverageOptions).to.equal('object');
      expect(codeCoverageOptions.length).to.be.gt(0);
      expect(codeCoverageOptions).to.include('code_climate');
      expect(codeCoverageOptions).to.include('sonar_cloud');
      done();
    });
  });

  describe('getTestingOptions', () => {
    it('should return options for unit testing', (done) => {
      const testingOptions = op.getTestingOptions('nodejs');
      expect(testingOptions).to.not.eql(undefined);
      expect(typeof testingOptions).to.equal('object');
      expect(testingOptions.length).to.be.gt(0);
      expect(testingOptions).to.include('mocha');
      expect(testingOptions).to.include('jest');
      done();
    });

    it('should throw an error', (done) => {
      const testingOptions = op.getTestingOptions('dragon');
      expect(testingOptions).to.eql(undefined);
      done();
    });
  });
});
