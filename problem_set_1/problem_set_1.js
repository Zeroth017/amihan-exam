const readline = require("readline");

function isPalindrome(s) {
  return new Promise((resolve, reject) => {
    try {
      const len = s.length;

      for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
          resolve(false);
          return;
        }
      }

      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

function palindromePairs(words) {
  return new Promise(async (resolve, reject) => {
    try {
      const pairs = [];
      const len = words.length;

      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (i !== j) {
            const combinedWord = words[i] + words[j];
            const isPal = await isPalindrome(combinedWord);
            if (isPal) {
              pairs.push([i, j]);
            }
          }
        }
      }

      resolve(pairs);
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

  const sample1 = "bat,tab,cat";
  const sampleWord1 = sample1.split(",").map((input) => input.trim());
  const result1 = await palindromePairs(sampleWord1);
  console.log("Sample 1 - Inputted Words: ", sample1);
  console.log("Output: ", result1);

  const sample2 = "abc,cba,bca";
  const sampleWord2 = sample2.split(",").map((input) => input.trim());
  const result2 = await palindromePairs(sampleWord2);
  console.log("\nSample 2 - Inputted Words: ", sample2);
  console.log("Output: ", result2);

  const sample3 = "a,b,c,ab,ba,abc,cba";
  const sampleWord3 = sample3.split(",").map((input) => input.trim());
  const result3 = await palindromePairs(sampleWord3);
  console.log("\nSample 3 - Inputted Words: ", sample3);
  console.log("Output: ", result3);

  rl.question("\n\nEnter a list of words: ", async (input) => {
    const words = input.split(",").map((input) => input.trim());
    try {
      const result = await palindromePairs(words);
      console.log("\nOutput: ", result);
    } catch (e) {
      console.error("\nError: ", e);
    }
    rl.close();
  });
}

// main();

module.exports = { main };
