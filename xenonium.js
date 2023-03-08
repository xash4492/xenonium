const fs = require("fs");

class Generator {
  constructor(codeLength = 16) {
    this.codeLength = codeLength;
  }

  gen(numCodes = 100000, filePath = "xenoniumCodes.json") {
    console.log(`\x1b[1mGenerating \x1b[34m${numCodes}\x1b[0m random codes of \x1b[34m${this.codeLength}\x1b[0m characters...`);
    const arr = [];
    const start = new Date().getTime();
    for (let i = 0; i < numCodes; i++) {
      const key = Array(this.codeLength)
        .fill()
        .map(() => {
          let char;
          do {
            char = String.fromCharCode(Math.floor(Math.random() * 74) + 48);
          } while (!/^[A-Za-z0-9]$/.test(char));
          return char;
        })
        .join("");
      arr.push(key);
    }
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
    const elapsed = new Date().getTime() - start;
    console.clear();
    console.log(
      `\x1b[1mSuccessfully Generated \x1b[34m${arr.length}\x1b[0m \x1b[1mCodes in \x1b[34m${elapsed}ms\x1b[0m.`
    );
  }
}

function gen(codeLength = 16, numCodes = 100000, filePath = "xenoniumCodes.json") {
  console.log(`\x1b[1mGenerating \x1b[34m${numCodes}\x1b[0m random codes of \x1b[34m${codeLength}\x1b[0m characters...`);
  const arr = [];
  const start = new Date().getTime();
  for (let i = 0; i < numCodes; i++) {
    const key = Array(codeLength)
      .fill()
      .map(() => {
        let char;
        do {
          char = String.fromCharCode(Math.floor(Math.random() * 74) + 48);
        } while (!/^[A-Za-z0-9]$/.test(char));
        return char;
      })
      .join("");
    arr.push(key);
  }
  fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
  const elapsed = new Date().getTime() - start;
  console.clear();
  console.log(
    `\x1b[1mSuccessfully Generated \x1b[34m${arr.length}\x1b[0m \x1b[1mCodes in \x1b[34m${elapsed}ms\x1b[0m.`
  );
}

module.exports = {
  Generator,
  gen,
};
