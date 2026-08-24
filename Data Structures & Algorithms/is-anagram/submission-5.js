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
            sTracker[s[i]] = (sTracker[s[i]] || 0) + 1
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
