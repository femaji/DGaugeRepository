# DGuage Tech Challenge
The following Tasks were given:

Please see attached dgauge-cypress-test.zip
-------------------------------------------
This contains a .js cypress test file which contains 4 example tests for D/Gauge Rift's login page.
The file itself contains a URL, email and password, which you can use to communicate with our production environment.
Your task is to improve this file as much as you can, ideally by creating a new Cypress project using best practices.
You should consider catering for more edge cases, better readability and maintainability, and ensure robustness so the tests remain valid even following future software releases.

# Running the test
There are two ways of running the Tests: Either running UI mode or CLI mode

# Execution - CLI Option
1. CLI {Command Line Interface}: To run the test locally on any machine; the machine must have Node js setup, Once NodeJs is installed, simply clone the project down, navigate to the root of the project and run:
> npm run cypress:run

This will execute on default browser which is Electron and default testbed which is a host machine.
However, user can change browser by adding extra flags as shown below. The command below will execute on a local machine and Chrome browser
> npm run cypress:run:chrome

# Local Execution - UI Option
This option works by simply running ```npm run cypress:open``` and then running the rest through the UI.

# Future works
Due to time constraints, work was stopped but possible improvement could be the following:
1. Add in the CI Pipeline like GitLab CI, Jenkins, Circle CI, etc.
2. Add capabilities for test across other environments like staging, testing, local, etc.
3. Add making API call to Jira or any other test management tool to update test reports
