# [xenonium v2 👽 (SALT OPTION)](https://npmjs.org/package/xenonium)

## Installation
To install the Xenonium package in your project, use the following command:

```npm install xenonium```


## Usage
Firstly, import the Xenonium module in your Node.js project using:

```js
const xenonium = require("xenonium");
```


You can now use the following options:

### Option 1: Using the Fabricator Class
To use the Fabricator class, create a new instance of it and customize it as per your requirements, and generate the codes using the gen() method. Here is an example code:

```js
// Create a new Fabricator
const fab = new xenonium.Fabricator();
```

```js
// Generate the codes
fab.gen(/* Number of Codes, Default is 100000 */, /* File Path, Default is "xenoniumCodes.json" */);
```

Optionally, you can set the salt value and code length like this:

```js
// Set the salt value
fab.salt(/* Salt, Default is "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */);
```
```js
// Set the code length
fab.codeLength(/* Code Length, Default is 16 */);
```

### Option 2: Using the Utility Function
You can also use the gen() utility function directly to generate codes. This is useful when you need a quick one-time solution for generating codes without the need for customization. Here is an example code:

```js
xenonium.gen(/* Number of Codes, Default is 100000 */, /* File Path, Default is "xenoniumCodes.json" */, /* Code Length, Default is 16 */);
```


Optionally, you can set the salt value like this:

```js
xenonium.gen(/* Number of Codes, Default is 100000 */, /* File Path, Default is "xenoniumCodes.json" */, /* Code Length, Default is 16 */).salt(/* Salt, Default is "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */);
```

## Inquiries
If you have any question feel free to create an issue or DM me on Discord (xash#7733) :)
## License
This package is licensed under the MIT License. See the LICENSE file for more information.
