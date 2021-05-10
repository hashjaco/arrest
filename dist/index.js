#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const inquirer = __importStar(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
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
const createProject = (projectPath) => {
    if (fs.existsSync(projectPath)) {
        console.log(chalk_1.default.red(`Folder "${projectPath}" already exists in current directory. Delete or create your new project under a different name.`));
        return false;
    }
    fs.mkdirSync(projectPath);
    return true;
};
const createDirectoryContents = (templatePath, projectName) => {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach((file) => {
        const origFilePath = path.join(templatePath, file);
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
        // skip files that we don't want copied, such as node_modules
        if (SKIP_FILES.indexOf(file) > -1)
            return;
        if (stats.isFile()) {
            let contents = fs.readFileSync(origFilePath, 'utf-8');
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf-8');
        }
        else if (stats.isDirectory()) {
            // create folder in destination folder
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // copy files/folder inside current folder recursively
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
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
    const options = {
        projectName,
        templateName: projectChoice,
        templatePath,
        targetPath,
    };
    console.log(options);
});
//# sourceMappingURL=index.js.map