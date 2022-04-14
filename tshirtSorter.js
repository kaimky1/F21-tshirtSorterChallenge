// Write your solution below:

const tshirtSorter = (string) => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for(i=0; i<string.length; i++){
        if(string[i] === 's'){
            arr1.push(string[i])
        }else if(string[i] === 'm'){
            arr2.push(string[i])
        }else if(string[i] === 'l'){
            arr3.push(string[i])
        }
    }
    const arr4 = arr1.concat(arr2);
    const finalArray = arr4.concat(arr3);
    finalString = finalArray.join("");
    return finalString;
}

console.log(tshirtSorter('lmlmslmslmss'))