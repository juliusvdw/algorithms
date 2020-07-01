// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  //Brute force method would be to create a nested loop to iterate over each number and find  the target number, this is not efficient.

  //Declare object/hash table
  let numObj = {};

  //Loop through nums array
  nums.forEach((num, index) => {
    let difference = target - num;

    //See if numObj contains target number,If so , it cannot be the same index as current
    if (numObj[difference] !== undefined && numObj[difference] !== index) {
      return [index, numObj[difference]];
    } else {
      numObj[num] = index;
    }
  });
};

twoSum([2, 7, 11, 15], 9);
