class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums)
        return set.size < nums.length ? true : false
        // for(let num of nums){
        //     if(!set.has(num)){
        //         set.add(num)
        //     } else {
        //         return true
        //     }
        // }
        // return false
    }
}
