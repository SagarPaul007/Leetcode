/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let n = arr.length;
    let i = 0;
    let j = n-1;
    let max = 0;
    while(i < j){
        let hold = Math.min(arr[i], arr[j])*(j-i);
        max = Math.max(max, hold);
        
        if(arr[i] < arr[j]) i++;
        else if(arr[i] > arr[j]) j--;
        else{
            if(arr[i+1] > arr[j-1]) i++;
            else j--;
        }
    }
    
    return max;
};