class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        // ["a","a","a","b","b","a","a","a","c","c","a"]
        // a 3 b 2 a 3 c 2 a

        let ans = []

        for(let i =0;i< chars.length;i++) {
            let curChar = chars[i]
            let j = i;
            let cnt = 0;
            while(j < chars.length && curChar == chars[j]) {
                cnt++, j++;
            }
            ans.push(curChar);
            
            
            if(cnt == 1) {
                // nothing
            }
            else if(cnt >= 10) {
                const str = String(cnt);
                for(let c of str) ans.push(c);
            } else ans.push(String(cnt))
        
            i = j - 1;
        }
// console.log(ans )
        // chars = ans;
        for(let i =0;i<ans.length;i++) chars[i] = ans[i]
        return ans.length;
    }
}
