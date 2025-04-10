
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
];
