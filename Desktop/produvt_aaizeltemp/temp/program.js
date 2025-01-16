// var twoSum = function(nums, target) {
//     for (var i =0 ; i< nums.length;i++){
//         for (var j = i+1; j<nums.length;j++){
//             if(nums[i]+nums[j]==target)
//                 return[i,j]
//         }
//     }
// };

// var nums = [3,1,3]
// var target = 6

// const result =  twoSum(nums,target)
// console.log(result)

const arr = [12, 32, 34, 45, 567, 42, 34, 45];

for (var i = 0; i <= arr.length; i++) {
  if (arr[0] > arr[1]) {
    return [i];
  }
}

console.log(arr);
