import fs from 'fs';
import path from 'path';
import debug from 'debug';

export default class Options {
  constructor() {
    this.libraryPath = path.join(process.cwd(), '/lib');
    this.languagesPath = path.join(this.libraryPath, '/languages');
    this.cicdPath = path.join(this.libraryPath, '/CI_CD');
    this.codeQualityPath = path.join(this.libraryPath, '/code_coverage');

    this.getCiCdOptions = this.getCiCdOptions.bind(this);
    this.getCodeCoverageOptions = this.getCodeCoverageOptions.bind(this);
    this.getDatabaseOptions = this.getDatabaseOptions.bind(this);
    this.getFrameworks = this.getFrameworks.bind(this);
    this.getLanguages = this.getLanguages.bind(this);
    this.getTestingOptions = this.getTestingOptions.bind(this);
  }

  getCiCdOptions() {
    try {
      return fs.readdirSync(this.cicdPath);
    } catch (err) {
      debug(err);
      return false;
    }
  }

  getCodeCoverageOptions() {
    try {
      return fs.readdirSync(this.codeQualityPath);
    } catch (err) {
      debug(err);
      return false;
    }
  }

  getDatabaseOptions(language) {
    try {
      const databasePath = path.join(this.languagesPath, language, '/database');
      return fs.readdirSync(databasePath);
    } catch (err) {
      debug(err);
      return false;
    }
  }

  getFrameworks(language) {
    try {
      const frameworksDir = path.join(
        this.languagesPath,
        language,
        '/frameworks'
      );
      return fs.readdirSync(frameworksDir);
    } catch (err) {
      debug(err);
      return false;
    }
  }

  getLanguages() {
    try {
      return fs.readdirSync(this.languagesPath);
    } catch (err) {
      debug(err);
      return false;
    }
  }

  getTestingOptions(language) {
    try {
      const testingDir = path.join(this.languagesPath, language, '/testing');
      return fs.readdirSync(testingDir);
    } catch (err) {
      debug(err);
      return [];
    }
  }
}
