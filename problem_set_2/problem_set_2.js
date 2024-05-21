const readline = require("readline");

function isValid(s) {
  return new Promise(async (resolve, reject) => {
    try {
      const stack = [];
      const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
      };

      for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
          const top = stack.pop();
          if (top !== matchingBrackets[char]) {
            resolve(false);
            return;
          }
        } else {
          resolve(false);
          return;
        }
      }

      resolve(stack.length === 0);
    } catch (e) {
      reject(e);
    }
  });
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("##################################");
  console.log("######## EXAMPLE OF INPUT ########");
  console.log("##################################\n");

  const sample1 = "[()]";
  const result1 = await isValid(sample1);
  console.log("Sample 1 - Inputted String: ", sample1);
  console.log("Output: ", result1);

  const sample2 = "[({)}]";
  const result2 = await isValid(sample2);
  console.log("Sample 2 - Inputted String: ", sample2);
  console.log("Output: ", result2);
  
  const sample3 = "{[()]}";
  const result3 = await isValid(sample3);
  console.log("Sample 3 - Inputted String: ", sample3);
  console.log("Output: ", result3);

  rl.question("\n\nEnter a string of brackets: ", async (input) => {
    try {
      const result = await isValid(input);
      console.log("\nOutput: ", result);
    } catch (e) {
      console.error("\nError: ", e);
    }
    rl.close();
  });
}


module.exports = { main };
