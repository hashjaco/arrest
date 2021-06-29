import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import clui from 'clui';
import Inquirer from './helpers/inquirer';
import Project from './helpers/project';

export default class Cli {
  constructor() {
    this.inquirer = new Inquirer();
    this.spinner = clui.Spinner;
    this.project = new Project();

    this.displayBanner = this.displayBanner.bind(this);
    this.displaySpinner = this.displaySpinner.bind(this);
    this.parseArgumentsIntoOptions = this.parseArgumentsIntoOptions.bind(this);
    this.run = this.run.bind(this);
  }

  displayBanner(bannerText, subText = '') {
    clear();
    console.log(
      chalk.red(figlet.textSync(`${bannerText}`, { horizontalLayout: 'full' }))
    );
    if (subText) {
      console.log(chalk.yellow(subText));
    }
  }

  displaySpinner(timeoutInSeconds, displayText, callback = null) {
    const status = new this.spinner(displayText);
    const timeout = timeoutInSeconds * 1000;
    status.start();
    setTimeout(() => {
      status.stop();
      if (callback) callback();
    }, timeout);
  }

  parseArgumentsIntoOptions(rawArgs) {
    const args = rawArgs.slice(2);
    return {
      baseCommand: args[0] || 'init',
      subcommand: args[1] || '',
      ...args,
    };
  }

  async run(args) {
    await this.displayBanner(
      'Arrest',
      '  Rest those typers and fast-track the development of your RESTful backend\n'
    );

    // Set the name of the project
    const projectName = await this.inquirer.askForProjectName();
    await this.project.setProperties(projectName);

    // Specify the language to use
    const projectLanguage = await this.inquirer.askForProjectLanguage();
    await this.project.setProperties(projectLanguage);

    // Specify the framework to use
    const projectFramework = await this.inquirer.askForProjectFramework(
      projectLanguage.language
    );
    await this.project.setProperties(projectFramework);

    // Specify testing library
    const testLibrary = await this.inquirer.askForUnitTestingLibrary(
      projectLanguage.language
    );
    await this.project.setProperties(testLibrary);

    // Specify the databases that you would like to use
    const databases = await this.inquirer.askToSelectDatabases(
      projectLanguage.language
    );

    // Specify DevTools to use
    const devTools = await this.inquirer.askToSelectDevOpsTools();

    this.project.build();

    // Ask user if they would like to initialize their git repository
    // if (this.inquirer.askToInitializeGit()){}

    // Display progress spinner
    await this.displaySpinner(
      3,
      'Stand by. Building your new backend with the awesome stack you chose!',
      () =>
        console.log(
          chalk.green(
            `Your new project name is ${chalk.blue(
              projectName.projectName
            )}. Sick name!'`
          )
        )
    );

    // Display project properties to confirm
    await this.project.displayProperties();

    // const options = this.parseArgumentsIntoOptions(args);
    // console.log(options);
  }
}
