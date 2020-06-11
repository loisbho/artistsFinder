In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000] to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.
### Stretch Features + Tests + API Key
Stretch Features:
Given more time, I would display just the first ten similar artists in a table. First, I would create state for page and rowsPerPage to keep track of how many rows I want to display per page. I would use Material UI's table features which includes custom pagination. Then, I would need to create an array of objects (categoryArray) that contains information about each category like name of artist and bio link. I would map through that category array and create table cells inside of a table row to build out the table head. After that, I would build out the table body and create a separate function to do this.

Another feature that I would implement would be displaying relevant biographical information particularly full name, date of birth and residence. My implementation would include creating an object to store those values, looping through the summary string, converting it into an array of strings and then grabbing the pertinent words. For example, if I wanted to store date of birth, I would grab the three elements after the word "born" is found and store it in my object. Another feature would be to display the artist searched for. 

Tests: I would add a test that validates the input.

API KEY: In real practice, I would not store my API key publicly; I would store it in a configuration file. 

### Refactor
I would make sure to store the input element of the searchForm in its own component and ensure that components like searchForms consist of a collection of (atoms) components that have one single feature.


