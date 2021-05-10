#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import chalk from 'chalk';

export interface CliOptions {
  projectName: string;
  templateName: string;
  templatePath: string;
  targetPath: string;
}

const CURR_DIR = process.cwd();
const SKIP_FILES = ['node_modules', '.template.json'];
const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to use?',
    choices: CHOICES,
  },
  {
    name: 'name',
    type: 'input',
    message: 'New project name?',
  },
];

const createProject = (projectPath: string) => {
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(
        `Folder "${projectPath}" already exists in current directory. Delete or create your new project under a different name.`
      )
    );
    return false;
  }
  fs.mkdirSync(projectPath);
  return true;
};

const createDirectoryContents = (templatePath: string, projectName: string) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    // skip files that we don't want copied, such as node_modules
    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf-8');

      const writePath = path.join(CURR_DIR, projectName, file);
      fs.writeFileSync(writePath, contents, 'utf-8');
    } else if (stats.isDirectory()) {
      // create folder in destination folder
      fs.mkdirSync(path.join(CURR_DIR, projectName, file));

      // copy files/folder inside current folder recursively
      createDirectoryContents(
        path.join(templatePath, file),
        path.join(projectName, file)
      );
    }
  });
};

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers['template'];
  const projectName = answers['name'];
  const templatePath = path.join(__dirname, 'templates', projectChoice);
  const targetPath = path.join(CURR_DIR, projectName);
  if (!createProject(targetPath)) {
    return;
  }

  createDirectoryContents(templatePath, projectName);

  const options: CliOptions = {
    projectName,
    templateName: projectChoice,
    templatePath,
    targetPath,
  };
  console.log(options);
});
