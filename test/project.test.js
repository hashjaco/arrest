import Project from '../src/helpers/project';
import { expect } from './settings';

describe('Project class methods', () => {
  let project = new Project();

  describe('getProperties', () => {
    it('should return project properties', (done) => {
      const properties = project.getProperties();
      expect(properties).to.not.equal('undefined');
      expect(typeof properties).to.equal('object');
      expect(Object.keys(properties).length).to.be.gt(0);
      done();
    });
  });

  describe('setProperties', () => {
    it('should set the projectName property', (done) => {
      let projectName = 'arrest';
      project.setProperties({ projectName });

      const properties = project.getProperties();

      expect(properties.projectName).to.eql(projectName);
      done();
    });

    it('should throw an error', (done) => {
      let randomProperty = 'programmer';
      project.setProperties({ randomProperty });
      const properties = project.getProperties();

      expect(properties).to.not.have.key('randomProperty');
      done();
    });
  });

  describe('displayProperties', () => {
    it("should log the project's properties to the console and return true", () => {
      const result = project.displayProperties();
      expect(result).to.not.be.undefined;
      expect(typeof result).to.equal('boolean');
      expect(result).to.be.true;
    });
  });
});
