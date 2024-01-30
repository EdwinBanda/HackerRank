const threeSum = (nums, target) => {
    let hasher = {}
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            const complement = target - nums[i] - nums[j]
            if(hasher.hasOwnProperty(complement)){
                return [hasher[complement],i,j]
            }
        }
        hasher[nums[i]] = i
    }
    return null
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums, 0));
