//This one is from LeetCode

const twoSum = (nums, target)=>{
   let hasher = {}
   for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if(hasher.hasOwnProperty(complement)){
            return [hasher[complement], i]
        }
        hasher[nums[i]] = i
    }
    return null
}
const nums = [2,11,15,7]
console.log(twoSum(nums, 9))