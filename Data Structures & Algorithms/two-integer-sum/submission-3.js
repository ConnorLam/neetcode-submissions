class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const tracker = {}

        for(let i = 0; i < nums.length; i++){
            // console.log(i)
            let val = target - nums[i]
            // console.log(val)
            if(tracker[val] !== undefined){
                return [tracker[val], i]
            }

            tracker[nums[i]] = i
            // console.log(tracker[val])

        }
        return []
    }
}
