#Arrest
##An API builder that gives you the power to develop powerful REST APIs from the command line.

###.arrest.json
###  This file contains the properties of the local project

### The purpose of having this configuration file is to enable the detection of an arrest project, add entities and new tools from anywhere within the project directory.

## Example configuration

```
{
  projectName: "bussin",
  language: "nodejs",
  framework: "express",
  codeQuality: "codeclimate",
  testCoverage: "none",
  cicd: "travis-ci",
  testingLibrary: "mocha",
  entities: [
    "user",
    "employee",
    "manager",
    "company",
    "account"
  ],
  databases: [
    "postgres",
    "redis"
  ],
  orm: "sequelizejs",
}
```

##Adding/Editing REST API templates



