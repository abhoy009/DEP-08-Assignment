// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

 

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }
    let mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))

    let result = []
    let count = 0;

    for (let[key, value] of mapSort1.entries()) {
        if (count < k) {
            result.push(key)
            count++;
        }
    }
    return result

}