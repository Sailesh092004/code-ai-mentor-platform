export interface Challenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  starterCode: string;
  testCases: TestCase[];
  hints: string[];
  solution: string;
}

export interface TestCase {
  input: string;
  expected: string;
  isHidden?: boolean;
}

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    testCases: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        expected: '[0, 1]',
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        expected: '[1, 2]',
      },
      {
        input: 'nums = [3, 3], target = 6',
        expected: '[0, 1]',
      },
      {
        input: 'nums = [1, 5, 8, 3], target = 11',
        expected: '[0, 2]',
        isHidden: true,
      },
    ],
    hints: [
      'Consider using a hashmap to store previously seen values.',
      'For each number, check if target - number exists in the hashmap.',
    ],
    solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`
  },
  {
    id: '2',
    title: 'Reverse String',
    difficulty: 'Easy',
    category: 'Strings',
    description: 'Write a function that reverses a string. The input string is given as an array of characters.',
    starterCode: `function reverseString(s) {
  // Your code here
}`,
    testCases: [
      {
        input: 's = ["h","e","l","l","o"]',
        expected: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        expected: '["h","a","n","n","a","H"]',
      },
    ],
    hints: [
      'Try using two pointers approach.',
      'Swap characters from outside to inside.',
    ],
    solution: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  
  return s;
}`
  },
  {
    id: '3',
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    category: 'Stacks',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.',
    starterCode: `function isValid(s) {
  // Your code here
}`,
    testCases: [
      {
        input: 's = "()"',
        expected: 'true',
      },
      {
        input: 's = "()[]{}"',
        expected: 'true',
      },
      {
        input: 's = "(]"',
        expected: 'false',
      },
      {
        input: 's = "([)]"',
        expected: 'false',
      },
      {
        input: 's = "{[]}"',
        expected: 'true',
      },
    ],
    hints: [
      'Consider using a stack data structure.',
      'Push opening brackets onto the stack and pop when encountering closing brackets.',
    ],
    solution: `function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (map[last] !== s[i]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`
  },
  {
    id: '4',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    category: 'Math',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise. A palindrome is a number that reads the same backward as forward.',
    starterCode: `function isPalindrome(x) {
  // Your code here
}`,
    testCases: [
      {
        input: 'x = 121',
        expected: 'true',
      },
      {
        input: 'x = -121',
        expected: 'false',
      },
      {
        input: 'x = 10',
        expected: 'false',
      },
      {
        input: 'x = 12321',
        expected: 'true',
        isHidden: true,
      },
    ],
    hints: [
      'Convert the number to a string and check if it reads the same backward.',
      'Or solve without string conversion by reversing the digits directly.',
    ],
    solution: `function isPalindrome(x) {
  // Negative numbers are not palindromes
  if (x < 0) return false;
  
  // Single digit numbers are palindromes
  if (x < 10) return true;
  
  // If number ends with 0, it can't be a palindrome unless it's 0
  if (x % 10 === 0 && x !== 0) return false;
  
  let reversed = 0;
  let original = x;
  
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  
  return original === reversed;
}`
  },
  {
    id: '5',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    category: 'Strings',
    description: 'Given an integer n, return a string array where for each number from 1 to n: if divisible by 3, output "Fizz"; if divisible by 5, output "Buzz"; if divisible by both 3 and 5, output "FizzBuzz"; otherwise, output the number as a string.',
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    testCases: [
      {
        input: 'n = 3',
        expected: '["1","2","Fizz"]',
      },
      {
        input: 'n = 5',
        expected: '["1","2","Fizz","4","Buzz"]',
      },
      {
        input: 'n = 15',
        expected: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      },
    ],
    hints: [
      'Use modulo operator to check divisibility.',
      'Check for FizzBuzz case first, then Fizz, then Buzz.',
    ],
    solution: `function fizzBuzz(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  
  return result;
}`
  },
  {
    id: '6',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    category: 'Arrays',
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array.',
    starterCode: `function maxSubArray(nums) {
  // Your code here
}`,
    testCases: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        expected: '6',
      },
      {
        input: 'nums = [1]',
        expected: '1',
      },
      {
        input: 'nums = [5,4,-1,7,8]',
        expected: '23',
      },
    ],
    hints: [
      'Try using Kadane\'s algorithm for an O(n) solution.',
      'Keep track of both the current sum and the maximum sum found so far.',
    ],
    solution: `function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Either take the current number or add it to the previous sum
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum if needed
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`
  },
  {
    id: '7',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'Linked Lists',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function mergeTwoLists(list1, list2) {
  // Your code here
}`,
    testCases: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        expected: '[1,1,2,3,4,4]',
      },
      {
        input: 'list1 = [], list2 = []',
        expected: '[]',
      },
      {
        input: 'list1 = [], list2 = [0]',
        expected: '[0]',
      },
    ],
    hints: [
      'Create a dummy head node to simplify the logic.',
      'Compare values from both lists and link the smaller one to the result list.',
    ],
    solution: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function mergeTwoLists(list1, list2) {
  // Create a dummy node to simplify logic
  const dummy = new ListNode(-1);
  let current = dummy;
  
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  // Attach any remaining nodes
  current.next = list1 !== null ? list1 : list2;
  
  return dummy.next;
}`
  },
  {
    id: '8',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    starterCode: `function climbStairs(n) {
  // Your code here
}`,
    testCases: [
      {
        input: 'n = 2',
        expected: '2',
      },
      {
        input: 'n = 3',
        expected: '3',
      },
      {
        input: 'n = 4',
        expected: '5',
      },
    ],
    hints: [
      'This problem has a recursive structure similar to Fibonacci sequence.',
      'Try using dynamic programming to avoid redundant calculations.',
    ],
    solution: `function climbStairs(n) {
  if (n <= 2) return n;
  
  // Initialize an array to store the number of ways to reach each step
  const dp = new Array(n + 1);
  dp[1] = 1; // 1 way to reach step 1
  dp[2] = 2; // 2 ways to reach step 2: 1+1 or 2
  
  for (let i = 3; i <= n; i++) {
    // Ways to reach step i = ways to reach i-1 + ways to reach i-2
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}`
  },
  {
    id: '9',
    title: 'Find First and Last Position',
    difficulty: 'Medium',
    category: 'Binary Search',
    description: 'Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].',
    starterCode: `function searchRange(nums, target) {
  // Your code here
}`,
    testCases: [
      {
        input: 'nums = [5,7,7,8,8,10], target = 8',
        expected: '[3,4]',
      },
      {
        input: 'nums = [5,7,7,8,8,10], target = 6',
        expected: '[-1,-1]',
      },
      {
        input: 'nums = [], target = 0',
        expected: '[-1,-1]',
      },
    ],
    hints: [
      'Use binary search to find the leftmost and rightmost occurrences of the target.',
      'Split the problem into finding the first occurrence and the last occurrence separately.',
    ],
    solution: `function searchRange(nums, target) {
  // Helper function to find the leftmost or rightmost occurrence
  const binarySearch = (nums, target, findLeft) => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        result = mid; // Found a match
        
        if (findLeft) {
          right = mid - 1; // Continue searching on left side
        } else {
          left = mid + 1; // Continue searching on right side
        }
      }
    }
    
    return result;
  };
  
  const left = binarySearch(nums, target, true);
  
  // If target not found, return [-1, -1]
  if (left === -1) return [-1, -1];
  
  const right = binarySearch(nums, target, false);
  
  return [left, right];
}`
  },
  {
    id: '10',
    title: 'Implement Queue using Stacks',
    difficulty: 'Medium',
    category: 'Stacks',
    description: 'Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support the standard queue operations (push, peek, pop, and empty).',
    starterCode: `class MyQueue {
  constructor() {
    // Your code here
  }
  
  push(x) {
    // Your code here
  }
  
  pop() {
    // Your code here
  }
  
  peek() {
    // Your code here
  }
  
  empty() {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'myQueue = new MyQueue(); myQueue.push(1); myQueue.push(2); myQueue.peek(); myQueue.pop(); myQueue.empty()',
        expected: '1, 1, false',
      },
    ],
    hints: [
      'Use one stack for enqueue operations and another for dequeue operations.',
      'Transfer elements between stacks only when necessary.',
    ],
    solution: `class MyQueue {
  constructor() {
    this.stack1 = []; // For push operations
    this.stack2 = []; // For pop/peek operations
  }
  
  // Add element to the queue
  push(x) {
    this.stack1.push(x);
  }
  
  // Move elements from stack1 to stack2 if needed
  _transfer() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
  
  // Remove the element from the front of the queue and return it
  pop() {
    this._transfer();
    return this.stack2.pop();
  }
  
  // Get the front element
  peek() {
    this._transfer();
    return this.stack2[this.stack2.length - 1];
  }
  
  // Return whether the queue is empty
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}`
  },
  {
    id: '11',
    title: 'Rotate Image',
    difficulty: 'Medium',
    category: 'Arrays',
    description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.',
    starterCode: `function rotate(matrix) {
  // Your code here
}`,
    testCases: [
      {
        input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
        expected: '[[7,4,1],[8,5,2],[9,6,3]]',
      },
      {
        input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
        expected: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
      },
    ],
    hints: [
      'Try transposing the matrix first (swapping rows with columns).',
      'Then reverse each row to get the 90-degree clockwise rotation.',
    ],
    solution: `function rotate(matrix) {
  const n = matrix.length;
  
  // Transpose the matrix (swap rows with columns)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
    }
  }
}`
  },
  {
    id: '12',
    title: 'Word Search',
    difficulty: 'Medium',
    category: 'Backtracking',
    description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
    starterCode: `function exist(board, word) {
  // Your code here
}`,
    testCases: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        expected: 'true',
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        expected: 'true',
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        expected: 'false',
      },
    ],
    hints: [
      'Use backtracking to explore all possible paths in the grid.',
      'Keep track of visited cells during the current path exploration.',
    ],
    solution: `function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  // Backtracking function to search from a given position
  function backtrack(row, col, index) {
    // Base cases
    if (index === word.length) return true;
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
    if (board[row][col] !== word[index]) return false;
    
    // Mark the cell as visited by changing its value temporarily
    const temp = board[row][col];
    board[row][col] = '#'; // Use a character that won't appear in the word
    
    // Explore all four directions
    const found = 
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1);
    
    // Restore the cell's original value
    board[row][col] = temp;
    
    return found;
  }
  
  // Try starting from each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  
  return false;
}`
  },
  {
    id: '13',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    category: 'Strings',
    description: 'Given a string s, return the longest palindromic substring in s.',
    starterCode: `function longestPalindrome(s) {
  // Your code here
}`,
    testCases: [
      {
        input: 's = "babad"',
        expected: '"bab" or "aba"',
      },
      {
        input: 's = "cbbd"',
        expected: '"bb"',
      },
      {
        input: 's = "a"',
        expected: '"a"',
      },
    ],
    hints: [
      'Try expanding around centers for each possible palindrome position.',
      'A palindrome can have either an odd or even length.',
    ],
    solution: `function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  
  let start = 0;
  let maxLength = 1;
  
  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  }
  
  // Check each position as a potential center
  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes (like "aba")
    expandAroundCenter(i, i);
    
    // Even length palindromes (like "abba")
    expandAroundCenter(i, i + 1);
  }
  
  return s.substring(start, start + maxLength);
}`
  },
];
