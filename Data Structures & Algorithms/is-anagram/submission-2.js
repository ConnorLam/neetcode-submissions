class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        // s.sort()
        // console.log('hi')
        let sTracker = {}
        // let tTracker = {}

        for(let w of s){
            if(!sTracker[w]){
                sTracker[w] = 1
            } else {
                sTracker[w]++
            }
        }
        // console.log(sTracker)

        for(let i of t){
            if(!sTracker[i]){
                return false
            } else {
                // console.log("bbefore",sTracker)
                sTracker[i]--
                // console.log("after",sTracker)
            }
        }
        return true
    }
}
