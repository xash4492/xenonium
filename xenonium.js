const fs = require("fs")
class Fabricator {
    constructor(codeLength = 16) {
      this.codeLength = codeLength;
      this.saltValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
  
    gen(numCodes = 1e5, filePath = "xenoniumCodes.json") {
      console.log(
        `Generating \x1b[34m${numCodes} random codes of \x1b[34m${this.codeLength}\x1b[0m characters...`
      );
      const arr = [];
      const start = new Date().getTime();
      for (let i = 0; i < numCodes; i++) {
        const key = Array(this.codeLength)
          .fill()
          .map(() => {
            let char;
            do {
              char = this.saltValue.charAt(Math.floor(Math.random() * this.saltValue.length));
            } while (!/^[A-Za-z0-9]$/.test(char));
            return char;
          })
          .join("");
        arr.push(key);
      }
      fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
      const elapsed = new Date().getTime() - start;
      console.clear();
      console.log(`Successfully Generated \x1b[34m${arr.length}\x1b[0m Codes in \x1b[34m${elapsed}ms\x1b[0m.`);
      return this;
    }
  
    salt(newSaltValue) {
      this.saltValue = newSaltValue;
      this.gen();
      return this;
    }
  }
  
  function gen(numCodes = 100000, filePath = "xenoniumCodes.json", codeLength = 16) {
    const fab = new Fabricator(codeLength).setFilePath(filePath);
    fab.gen(numCodes);
    return {
      salt: (newSalt) => {
        fab.salt(newSalt);
      },
    };
  }
  module.exports = {
    Fabricator,
    gen,
  };
