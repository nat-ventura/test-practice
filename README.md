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

#### Example Mocha Test Suite
```javascript
describe('<method> Test', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});
```

#### Chai Note

Chai is an assertion library used to check the state of our code during a test to ensure that the code behaved as expected. During testing, we use chai to check our values against expected preset values.

#### Sinon Notes

Sinon helps keep tests simple by mocking out sub systems and allows us to see how objects/functions have been used.

In unit testing, you do not want to be accessing the file system or any external services. If you made an API call to a server in a test, you can't be 100% sure what the server will return. For that reason, you can't be 100% sure the output of your test.

Sinon helps you get around this by "mocking out" the server. You replace the calls to the server with calls to a fake server that returns what you ask it to return.

Let's say you make an API call to a server that gets a user's email address. You can set up a fake server so that when it's given a particular name, it returns a predefined email address.

- Spies: Allow us to check that functions are called.
  - Can <b>not</b> have behavior assigned to them.
- Stubs: Like spies, but can be forced to behave in a particular ways.
- Mocks: Fake methods like spies, with pre-programmed behavior like stubs. The advantage is pre-programmed expectations as well. Will fail your tests if not used as expected. Useful for mocking out particular function within an object.

#### Example for When to Use Sinon Mock or Stub
If you wanted a particular function to return a specific value in your test (i.e. your `verifyPassword` method to `return true` so that you can check you are logged in when `verifyPassword` returns true.
