class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0
        let right = s.length - 1

        while (left <= right){
            let lLetter = s[left]
            let rLetter = s[right]
            s[left] = rLetter
            s[right] = lLetter
            left++
            right--
        }
        return s
    }
}
