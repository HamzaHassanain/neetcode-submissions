class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        const sortedArr = nums.sort((a,b)=>b-a); //   [ 9, 7, 4, 1 ]
        let min = 100000;

        for(let i=0;i<sortedArr.length;i++) {
            let result = sortedArr[i] - sortedArr[i+k-1];
            if(min>result){
                min = result  ;
                continue;
            }
        }
        return min;
    }
}