# the-coderfactory-bank

> This is a companion to a talk given at the Coderfactory, Sydney ( 17/11/2016 )

This project illustrates how to write unit tests for a middleware used by an Express application.

## installation

Clone this project and install.

```
> git clone https://github.com/indieisaconcept/the-coderfactor-bank.git
> npm i
```

### running

Run `npm start`. The application will be accessible from [http://localhost:3000](http://localhost:3000).

#### routes available

- /statement

## running tests

- npm test      : runs test suite
- npm run lint  : runs code through eslint
- npm run cover : create code coverage report

Tests use the [ava](https://github.com/avajs/ava) as the test runner.

## recommended

### resources

- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.ajy3qnl04) : Eric Elliot
- [5 Common Misconceptions About TDD & Unit Tests](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9#.z00suexdv) : Eric Elliot
- [awesomenodejs](https://node.cool) - Collection of categorised node.js resources

### modules

There are lots to be found listed on `awesomenode` but this one is missing.

- [npm-check](https://www.npmjs.com/package/npm-check) : Check for outdated, incorrect, and unused dependencies.

# Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.

# Release History

- *1.0.0* Initial release

# License

Copyright (c) 2016 Jonathan Barnett. Licensed under the MIT license.
