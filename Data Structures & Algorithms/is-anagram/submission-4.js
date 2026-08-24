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
        let sTracker = {}

        for(let i = 0; i < s.length; i++){
            if(!sTracker[s[i]]){
                sTracker[s[i]] = 1
            } else {
                sTracker[s[i]]++
            }
        }

        for(let i = 0; i < t.length; i++){
            if(!sTracker[t[i]]){
                return false
            } else {
                sTracker[t[i]]--
            }
        }
        return true
    }
}
