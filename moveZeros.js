// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
  //Loop through nums arr backwards, as if we go upwards, the splice would cause indexes to change, affecting the output
  //If number === 0 we remove it from the index with splice
  //Push the 0 to numsArray

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);
