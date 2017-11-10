# Unit Testing with Mocha, Chai, and Sinon

#### What is Unit Testing?

The "unit" in "unit testing" just means that you are testing one unit within your application.
- Specifies the behavior of your software-- makes sure it's working the way you expect/intend.
- "Unit" refers to individual parts-- modules that work independently of each other.

#### TDD Workflow

Always write a failing test first and then make it pass before refactoring.

- 1. Red: Write a test and make it fail
- 2. Green: Make the test pass with minimal code in order to make the test pass
- 3. Yellow: Refactor! Clean up and re-run tests without changing behavior
  - This does NOT mean writing extra code that will make future tests pass! For example, changing the return from an assigned value to changing the return to have logic is _not_ refactoring, it is _extending_ the code for further functionality.
  - If you want to write more functionality, you need to write another test and re-begin the cycle.

#### Sinon Notes

In unit testing, you do not want to be accessing the file system or any external services. If you made an API call to a server in a test, you can't be 100% sure what the server will return. For that reason, you can't be 100% sure the output of your test.

Sinon helps you get around this by "mocking out" the server. You replace the calls to the server with calls to a fake server that returns what you ask it to return.

Let's say you make an API call to a server that gets a user's email address. You can set up a fake server so that when it's given a particular name, it returns a predefined email address.

- Spies: Allow us to check that functions are called.
