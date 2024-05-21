# Problem Set 2: Valid Parentheses

## Problem Description

    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
    valid. An input string is valid if:

    1.  Openbrackets must be closed by the same type of brackets.
    2.  Openbrackets must be closed in the correct order.

## Solution Overview

    In this problem, I first created the isValid function so that I may determine the inputted parentheses one by one.
    I initialized first the matchingBrackets for each brackets that is available which are " ( ), [ ], and { } ". Now 
    I have first created the left side of the parentheses which are the "(", "[", "{" so that when I create the else if
    for their matchingBrackets, I may determine if it is closed in the correct order since I use stack.pop() to get the
    last data in the stack array.

    The same as problem set 1, I have also added three examples and a user input example so that testers will be able to
    test it with other strings they want which will only bring false if they add other characters that are not parentheses
    that is the reason I still added the else in the isValid function.

## Instructions to Run the Code

    To run the code, simply type the command "node problem_2.js" since it is already exported to problem_2.js in the root
    folder so there is no need to "cd problem_set_2".
