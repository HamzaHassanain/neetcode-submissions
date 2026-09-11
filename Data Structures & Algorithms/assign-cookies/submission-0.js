class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
findContentChildren(g, s) {
    let answer = 0;
    let j = 0
    let sortedKid  = g.sort((a,b)=>a-b);
    let sortedCookie = s.sort((a,b)=>a-b);
    
    for (let i = 0; i< sortedKid.length; i++){
        // for each i, find the cookie, that will match, 
        // did find cookie

        let didfind = 0;
        
        for(j;  j < sortedCookie.length; j++) {
            if(sortedCookie[j] >=sortedKid[i]) {
                didfind = 1;
                j++; // current cookie already taken! 
                break;
            }
        }
        if(didfind) answer ++ ;
    }
    return answer;
    }
    
}
