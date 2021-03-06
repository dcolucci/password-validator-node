## Password Validator

A library for validating passwords. Strives to provide default support for the latest [NIST password guidelines](https://pages.nist.gov/800-63-3/).


#### Default password guidelines

Currently NIST specifies four guidelines for a password:
 * ASCII characters only
 * Minimum of 8 characters
 * Maximum of 64 characters
 * Cannot be a common password


### Download

```sh
$ git clone git@github.com:dcolucci/password-validator-node
```

### Build

The tool must be built before use in order to generate the list of common passwords.  You can pass your own list of common passwords to `build` if you like; otherwise, the tool will use the [default list](https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/10_million_password_list_top_100000.txt).

```sh
npm run build [<file>]
```
This will copy the contents of `<file>` (or `common-passwords.txt` if no file specified) to a `data/commonPasswords.json` file for faster runtime processing.


### Usage

Use the `password-validator` command to validate a file of candidate passwords, one password per line.

```sh
$ ./bin/password-validator <file>
```

This will check each line of the file against each of the configured validation checks, and print validation failures to the console.


#### Example

Here is our text file of candidate passwords, `passwords.txt`:

```
negativegemini
foo
mortimerthemathmouse
password
```

Validate the passwords in the file, and see output:

```sh
$ password-validator passwords.txt
# foo -> Error: Too Short - minimum length is 8
# password -> Error: password is part of common passwords list and cannot be used
```


### To Do
 - [ ] Implement actual build system
 - [ ] Integration tests
 - [ ] JavaScript module accepting custom validators / other options
 - [ ] Research using `Map` or `Set` for faster common password lookup
 - [ ] Robust error handling for malformed input files
