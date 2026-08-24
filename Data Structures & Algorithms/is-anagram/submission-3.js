class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }

        let sSorted = s.split('').sort()
        let tSorted = t.split('').sort()

        for(let i = 0; i < sSorted.length; i++){
            if(sSorted[i] !== tSorted[i]){
                return false
            }
        }
        return true
    }
}
