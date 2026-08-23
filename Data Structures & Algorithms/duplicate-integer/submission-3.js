class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let tracker = {}
        for(let i = 0; i <= nums.length - 1; i++){
            if(!tracker[nums[i]]){
                tracker[nums[i]] = 1
                // console.log(tracker)
            } else {
                // console.log(nums[i], tracker)
                return true
            }
        }
        return false
    }
}
