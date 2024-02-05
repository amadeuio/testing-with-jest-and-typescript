![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# Testing with Jest and TypeScript

### About 📖

Solution to the 10th assignment in the JavaScript chapter on [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

### Description 📚

This repository contains 5 TypeScript functions with corresponding Jest tests.

### Locations 📍

- Functions: [`src/`](src/)

- Tests: [`__tests__/`](__tests__/)

### Functions 🔧

- `capitalize`: Capitalizes the first letter of a string

- `reverseString`: Reverses a string

- `calculator`: An object with functions for the basic operations: `add`, `subtract`, `divide`, and `multiply`

- `caesarCipter`: Encrypts a string with a shift key

- `analyzeArray`: Provides `average`, `min`, `max`, and `length` of an array of numbers

### Installation 📦

- Make sure you have [Node.js](https://nodejs.org) installed on your system

- Clone this repo to your local machine `git clone git@github.com:amadeuio/testing-practice.git`

- Run `npm install` in the project directory. This will install the dependencies specified under `devDependencies` in the [`package.json`](package.json) file

### Usage 🖊️

- Use `npm test` to run all tests

- If you just want to run one particular test file, use `npm test filename.test.ts` inside the [`__tests__/`](__tests__/) directory

- If you want to run the TypeScript function files in [`src/`](src/) without the need to transpile to JavaScript first, you can use ts-node by running `ts-node filename.ts`

- Have fun messing around with this project, changing or adding new tests and functions!

### Resources Used 💡

- [GPT](https://chat.openai.com)
