import appRootPath from 'app-root-path';
import fs from 'fs-extra';
import chalk from 'chalk';
import treeify from 'treeify';
import debug from 'debug';
import path from 'path';

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
      orm: 'none',
    };

    this.build = this.build.bind(this);
    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
    this.displayProperties = this.displayProperties.bind(this);
  }

  build() {
    try {
      const moduleRootPath = appRootPath.path;
      const frameworkTemplate = path.join(
        moduleRootPath,
        'lib',
        'languages',
        this.state.language,
        'frameworks',
        this.state.framework
      );

      fs.mkdirsSync(this.state.projectName);
      fs.copySync(frameworkTemplate, this.state.projectName);
      return true;
    } catch (err) {
      debug(err);
      return false;
    }
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

  getProperties() {
    return this.state;
  }

  setProperties(props) {
    if (!Object.keys(props).length) {
      console.log('Props did not come through to set');
      return;
    }
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
}
