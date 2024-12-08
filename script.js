const divide = (arr, n) => {
  const result = []; // To store the subarrays
  let currentSubarray = []; // To track the current subarray
  let currentSum = 0; // To track the sum of the current subarray

  for (let num of arr) {
    // If adding the current number exceeds the limit, start a new subarray
    if (currentSum + num > n) {
      result.push(currentSubarray); // Push the completed subarray to the result
      currentSubarray = []; // Start a new subarray
      currentSum = 0; // Reset the sum
    }
    // Add the number to the current subarray
    currentSubarray.push(num);
    currentSum += num;
  }

  // Add the last subarray if it has elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
