import ask from './ask';
import Options from './options';

export default class Inquirer {
  constructor() {
    this.op = new Options();

    this.askForProjectFramework = this.askForProjectFramework.bind(this);
    this.askForProjectLanguage = this.askForProjectLanguage.bind(this);
    this.askForProjectName = this.askForProjectName.bind(this);
    this.askToSelectDatabases = this.askToSelectDatabases.bind(this);
    this.askToSelectDevOpsTools = this.askToSelectDevOpsTools.bind(this);
    this.askForUnitTestingLibrary = this.askForUnitTestingLibrary.bind(this);
  }

  askForProjectFramework(language) {
    const frameworks = this.op.getFrameworks(language);
    const question = [
      {
        name: 'framework',
        type: 'list',
        message: 'Which framework would you prefer to use?',
        choices: [...frameworks, 'none'],
        validate: (value) => {
          if (value.length) return true;
          return 'Please choose a framework';
        },
      },
    ];

    return ask(question);
  }

  askForProjectLanguage() {
    const languages = this.op.getLanguages();
    const question = [
      {
        name: 'language',
        type: 'list',
        message:
          'From the following options, choose which language you would like your API to be implemented in:',
        choices: languages,
        validate: (value) => {
          if (value.length) return true;
          return 'Please choose a language from the options';
        },
      },
    ];

    return ask(question);
  }

  askForProjectName() {
    const question = [
      {
        name: 'projectName',
        type: 'input',
        message:
          "What's the catchiest name you can think of for your new project and git repo?",
        validate: (value) => {
          if (value.length) return true;
          return 'Please enter a name for your project';
        },
      },
    ];
    return ask(question);
  }

  // TODO: Implement askForUnitTestingFramework after writing tests

  askForUnitTestingLibrary(language) {
    const testing = this.op.getTestingOptions(language);
    const question = [
      {
        name: 'testingLibrary',
        type: 'list',
        message: 'Choose your unit-testing framework:',
        choices: [...testing, 'none'],
      },
    ];

    return ask(question);
  }

  // TODO: Implement askToInitializeGit after writing tests
  askToInitializeGit() {
    const question = [
      {
        name: 'gitRepo',
        type: 'list',
        message: 'Would you like to initialize git now?',
        choices: ['yes', 'no'],
      },
    ];

    return ask(question) === 'yes';
  }

  askToSelectDatabases(language) {
    const databases = this.op.getDatabaseOptions(language);
    const question = [
      {
        name: 'databases',
        type: 'checkbox',
        message: 'Select the types of databases you would like to use:',
        choices: [...databases, 'none'],
      },
    ];

    return ask(question);
  }

  // TODO: Implement askToSelectDevOpsTools after writing tests
  askToSelectDevOpsTools() {
    const question = [
      {
        name: 'devtools',
        type: 'checkbox',
        message: 'Choose your DevOps tools:',
        choices: [
          'CI/CD',
          'Code Coverage',
          'Test Coverage',
          'Docker',
          'Kubernetes',
          'none',
        ],
      },
    ];

    return ask(question);
  }
}
