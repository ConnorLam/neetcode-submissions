class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // first make a tracker that keeps track off all numbers passed through
    // the key is the number and the value is the index
    // loop through array and if the target - number you're on is one of the keys in the
    // index then return the value and the index you are currently on
    // dont need to return out of the array since it is assumed there is at least one 
    // accepeted answer per the question
    twoSum(nums, target) {
        const tracker = {}

        for(let i = 0; i < nums.length; i++){
            if(tracker[target-nums[i]] !== undefined){
                return [tracker[target-nums[i]], i]
            } else {
                tracker[nums[i]] = i
                // console.log(tracker, tracker[nums[i]])
            }
        }
    }
}
