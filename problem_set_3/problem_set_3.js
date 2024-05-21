const readline = require("readline");

function lengthOfLIS(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.some(num => typeof num !== 'number' || isNaN(num))){
    return 'Invalid Input';
  }

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  const highestNumber = Math.max(...dp);

  return highestNumber;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("##################################");
  console.log("######## EXAMPLE OF INPUT ########");
  console.log("##################################\n");

  const sample1 = "1,2,3,4,5,6,7,8,9,10";
  const sampleNumber1 = sample1.split(",").map((input) => Number(input.trim()));
  const result1 = lengthOfLIS(sampleNumber1);
  console.log("Sample 1 - Inputted Numbers: ", sample1);
  console.log("Output: ", result1);

  const sample2 = "10,9,2,5,3,7,101,18";
  const sampleNumber2 = sample2.split(",").map((input) => Number(input.trim()));
  const result2 = lengthOfLIS(sampleNumber2);
  console.log("\nSample 2 - Inputted Numbers: ", sample2);
  console.log("Output: ", result2);

  const sample3 = "0,3,23,51,32,50,100";
  const sampleNumber3 = sample3.split(",").map((input) => Number(input.trim()));
  const result3 = lengthOfLIS(sampleNumber3);
  console.log("\nSample 3 - Inputted Numbers: ", sample3);
  console.log("Output: ", result3);

  rl.question("\n\nEnter a list of numbers: ", (input) => {
    let numbers = [];
    if(input){
      numbers = input.split(",").map((input) => Number(input.trim()));
    }
    try {
      const result = lengthOfLIS(numbers);
      console.log("\nOutput: ", result);
    } catch (e) {
      console.error("\nError: ", e);
    }
    rl.close();
  });
}

module.exports = { main };
