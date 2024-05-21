# Problem Set 1: Palindrome Pairs

## Problem Description

    Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that
    the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.

## Solution Overview

    In this problem, I first created the palindromePairs function so that I can pair up every data of the array excluding
    those that are of the same placement like [0, 0]. Thus, creating the loops for i and j and when i !== j, this is the
    only time to determine if it is a Palindrome. Therefore, I created next is to determine if it is a palindrome which is
    the isPalindrome function which only returns the boolean true or false. If it is a Palindrome, I created a
    pairs.push([i, j]) function so that it will add in the output.

    I also added more examples and made the main function to accept user inputs so that the testers can test it with a
    different array. Though the user input should be separated with a comma "," since it is coded with split(",") then I map
    it to an array of words.

## Instructions to Run the Code

    To run the code, simply type the command "node problem_1.js" since it is already exported to problem_1.js in the root
    folder so there is no need to "cd problem_set_1".
