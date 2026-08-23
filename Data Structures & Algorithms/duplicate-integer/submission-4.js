class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let tracker = {}
        for(let num of nums){
            if (tracker[num]){
                return true
            } else {
                tracker[num] = 1
            }
        }
        return false
    }
}
