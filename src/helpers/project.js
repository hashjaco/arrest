import chalk from 'chalk';
import treeify from 'treeify';
import debug from 'debug';
import path from 'path';
import shell from 'shelljs';

export default class Project {
  constructor() {
    this.state = {
      projectName: 'none',
      gitRepo: 'none',
      author: 'none',
      public: true,
      language: 'none',
      framework: 'none',
      codeQuality: 'none',
      testCoverage: 'none',
      codeCoverage: 'none',
      'CI/CD': 'none',
      testingLibrary: 'none',
      entities: [],
      databases: [],
    };

    this.build = this.build.bind(this);
    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
    this.displayProperties = this.displayProperties.bind(this);
  }

  setProperties(props) {
    if (!Object.keys(props).length) console.log('Props did not come through to set');
    try {
      Object.keys(props).forEach((prop) => {
        if (prop in this.state) {
          this.state[prop] = props[prop];
        }
      });
    } catch (err) {
      debug(err);
    }
  }

  getProperties() {
    return this.state;
  }

  displayProperties() {
    try {
      console.log(chalk.blue('\nProject Description'));
      console.log(chalk.yellow(treeify.asTree(this.state, true)));
      return true;
    } catch (err) {
      debug(err);
      return false;
    }
  }

  build() {
    try {
      const frameworkTemplate = path.join(__dirname, 'lib', this.state.language, this.state.framework);

      shell.mkdir(this.state.projectName);
      // TODO: figure out why shelljs member function 'cd' isn't working properly
      console.log(frameworkTemplate);
      shell.cp('-R', frameworkTemplate, this.state.projectName);
      return true;
    } catch (err) {
      debug(err);
      return false;
    }
  }
}
