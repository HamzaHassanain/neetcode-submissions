class Solution {
public:

// 1 0 1 0 0 0 1 0 1 0
//       1 2 3
    //  ans+=1+ 2 + 3 // 1 + 2 + 3 => SUM OF numbers from 1 to 3
     // [0,0,0,0,0] => 1 + 2 + 3 + 4 + 5
//    l   r       r2
//    prv_ans = 4
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        if (goal == 0) {
            int ans = 0, consecutive_zeros = 0;
            for (int x : nums) {
                if (x == 0) {
                    consecutive_zeros++;
                    ans += consecutive_zeros;
                } else {
                    consecutive_zeros = 0;
                }
            }
            return ans;
        }

        int l = 0, 
            r = 0, 
            r2 = 0, 
            ans = 0,
            prev_subarrays = 0;
    
        int cur = 0;
        while(r < nums.size() && cur < goal) {
            cur += nums[r];
            r++; 
        }
        r--;
        // 1 => 
        if(cur == goal)  prev_subarrays = 1;
        else return 0;

        r2 = r+1;
        while(r2 <  nums.size() && nums[r2] == 0) r2++ , prev_subarrays++;

        ans = prev_subarrays;
        
            // cout << l << " " << r << " " << r2 << " " << prev_subarrays << endl;
        l++;

        while(l < nums.size()) {
            
            if(nums[l-1] == 0) {
                ans += prev_subarrays;
            } else {

                if(r2 <  nums.size())
                    prev_subarrays = 1; 
                else prev_subarrays = 0;
                r = r2;
                r2 = r+1;
                // ? 
                while(r2 <  nums.size() && nums[r2] == 0) r2++ , prev_subarrays++;

                ans += prev_subarrays;
            }
            l++;

        }

        return ans;
    }
};