#!/usr/bin/env node

/**
 * A helper utility for validating individual passwords on the command line
 */

const { validate } = require('../lib/validate.js');

const candidate = process.argv[2];

const result = validate(candidate);

if (result.errors) {
  for (let error of result.errors) {
    console.log(error);
  }

  process.exit(1);
}

console.log('password is valid!');
