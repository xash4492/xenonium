# xenonium 👽
A fast and reliable code generator.
___
## Installation
To use this package, you first need to install it by running the following command:
```
npm install xenonium
```
## Usage
### 1. Direct
You can use the gen() function exported by the xenonium package to generate random codes without creating an instance of the Generator class by:
- Importing the gen function from the xenonium package:
```js
const { gen } = require("xenonium");
```
**Alternativly you can just import xenonium by:**
```js
const xenonium = require("xenonium")
```
- Then call the gen() function, passing in the number of codes to generate (optional, defaults to 1000000), the code length (optional, defaults to 16), and the file path to save the codes to (optional, defaults to "db/cd.json"):
```js
gen(500000, 20, "myCodes.json");
```
**OR**
```js
xenonium.gen(500000, 20, "myCodes.json");
```
### 2. Constructor
To use the Generator class to generate random codes and save them to a JSON file, you can do the following:
- Import the Generator class from the xenonium package:
```js
const { Generator } = require("xenonium");
```
**Alternativly you can just import xenonium by:**
```js
const xenonium = require("xenonium")
```
- Then create an instance of the Generator class by passing in a code length (optional, defaults to 16):
```js
const x = new Generator(20);
```
**OR**
```js
const x = new xenonium.Generator(20)
```
- Lastly call the gen() method on the generator instance, passing in the number of codes to generate (optional, defaults to 1000000) and the file path to save the codes to (optional, defaults to "xenoniumCodes.json"):
```js
x.gen(500000, "myCodes.json");
```
## License
This package is licensed under the MIT License. See the LICENSE file for more information.
