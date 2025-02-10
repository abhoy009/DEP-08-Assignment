/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) 
{
    let i = 0 , j = 0;
    let ans = 0;
    let mp = new Map();

    while(j < s.length)
    {
        mp.set(s[j] , (mp.get(s[j]) || 0)+ 1);
        while(mp.get(s[j]) > 1)
        {
            mp.set(s[i] , mp.get(s[i]) - 1);
            if(mp.get(s[i]) === 0) mp.delete(s[i]);
            i++;
        }
        ans = Math.max(ans , j-i+1);
        j++;
    }
    return ans;
};
