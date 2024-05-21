# Problem Set 3: Longest Increasing Subsequence

## Problem Description

    Given an unsorted array of integers, find the length of the longest increasing subsequence.

## Solution Overview

    In this problem, I first established the logic behind on how to get the longest increasing subsequence. I have used
    dyanmic programming techniques to save every highest possible increasing instances per element of the array of numbers.
    I first created a new array of the same length filled with 1 which indicates the initial count for each element. Then,
    I run it through the for loop within another for loop of j so that it will go through the entire array again after 
    moving forward to the next element for the loop of i. Now if nums[i] is greater than nums[j], it will update the dp[i]
    of its maximum current value which can be gotten with dp[i] and dp[j] + 1. 

    Afterwards, I return the highest number within that dp array so that it will show the longest increasing subsequence.

    The same as problem set 1, I have also added three examples and a user input example so that testers will be able to
    test it with other array of numbers. If the user inputted an invalid number like a letter, it will automatically output 
    an Invalid Input, while if it is only an empty array, then it will return 0.

## Instructions to Run the Code

    To run the code, simply type the command "node problem_3.js" since it is already exported to problem_3.js in the root
    folder so there is no need to "cd problem_set_3".
