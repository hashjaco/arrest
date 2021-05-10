# REST API Template
####This template is stocked with essential tools used by professionals working on large-scale projects

##Tools
###CI/CD
```TravisCI``` automate integration and deployment

###Testing
```mocha``` test runner<br>
```chai``` used to make assertions<br>
```sinon-chai``` extends chai's assertions<br>
```supertest``` used to make HTTP calls to our API endpoints<br>

###Test Coverage and Reporting
```nyc``` collect test coverage report<br>
```coveralls``` for uploading test coverage to coveralls.io. Provides a more convenient way to visualize our tests.<br>


## Getting Started
###Package.json
The first thing you may want to do is rename your project, and the description in your package.json file.

###Dependencies
Install all the dependencies by entering the command ```yarn```<br>
Simple enough, right? 

###Set rules for code format
Now, take a look at **.editorconfig** in the root folder. This sets rules for code formatting throughout the project.<br>
a) The first line states that this is the top-most EditorConfig file.<br>
   b) **[ * ]** on the second line basically says to apply all the rules below to all files in the project folder. This is good to have if working with a team so code format remains consistent.
   The rules below are self-explanatory, so I won't go over all of them. You should modify them to suit your preference.<br>

Check out the documentation at https://www.editorconfig.org
   
###Add version control
Initialize the project as a git repository with the command ```git init```.<br>
I have already added a **.gitignore** file with some standard folders and files that you will not want to commit.

##Setup
###Continuous Integration/Continuous Deployment
1) You will need to create an account at https://travis-ci.com using your GitHub account.
2) Hover over the dropdown arrow next to your profile picture and click on ```settings```.
3) Under ```Repositories``` tab, click ```Manage repositories on GitHub```, then you will be redirected to GitHub.
4) On the GitHub page, scroll down to ```Repository access``` and click the checkbox next to ```Only select repositories```.
5) Click the ```Select repositories``` dropdown and find your project repository. Click it to add it to the list of repos you would like to add to TravisCI
6) Click ```Approve and install``` and then you will be redirected back to TravisCI.
7) At the top of the repo page, close to the repo name, click on the ```build unknown``` icon. From the Status Image modal, select markdown from the format dropdown.
8) Copy the displayed code and paste it into your README.md
9) Check out the ```.travis.yml``` file at the root of this project. I have minimally configured it for you, but you may want to change it up to suit your stack. For example, make sure that the node version matches the version you are using...that sort of thing.

###Coverage Reporting
1) Login or Sign Up at https://coveralls.io with your GitHub account.
2) After successfully logging in, open the navigation dropdown menu at the top-left of the window, then click on ```ADD REPOS```.
3) Click ```SYNC REPOS```, find your project in the list below, and toggle coverage on. FYI, your repository must be public unless you are paying for a PRO account.
4) You will find the repo token within the repo details. Replace the value for repo_token in ```.coveralls.yml``` with it.

###Code Quality
1) Now, at https://codeclimate.com, sync your repo within. It is essentially the same process as syncing with coveralls above; it's fairly intuitive. Once you are done, under ```CODEBASE SUMMARY```, go to ```Test Coverage```, scroll down, copy the Test Reporter ID and paste it into your ```.travis.yml``` configuration file as the value for CC_TEST_REPORTER_ID.

###Database
