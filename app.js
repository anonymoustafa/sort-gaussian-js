const input = [350,-8,19,34,10,0.6,60,-30,-30,-12,123,52,2.34,7,-44,-55];
const output = [];

const inputSorted = input.sort(function(a, b){return a - b});

for (let index = inputSorted.length-1; index >= 0; index--) {
  if (index%2==0 && !isNaN(inputSorted[index])) {
    output.push(inputSorted[index])
  } else {
    output.unshift(inputSorted[index])
  }
  
}

console.log(`array has \n ${input.length} elements \n sorted min to max has \n ${inputSorted.length} elements \n output has \n ${output.length} elements`)

console.log(output);