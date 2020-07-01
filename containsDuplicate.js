// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

const containsDuplicate = (nums) => {
  //Sort array in ascending order
  nums.sort((a, b) => a - b);

  //Loop through nums array.
  //Check whether next number is the same. If so , return true , else complete loop and return false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

containsDuplicate([0, 2, 2, 1, 3, 6, 5]);
