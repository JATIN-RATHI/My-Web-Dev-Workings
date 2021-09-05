// async 
let arr = [1, 2, 3, 4, 5];

function smaller(x)
{
    return x * x;
}

function cuber(x)
{
    return x * x * x;
}
// function can be passed as an argument 
// implementation  map js
function find(arr, cb)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        let val = cb(arr[i]);
        newArr.push(val);
    }
    return newArr;
}

console.log("Square Arr : " , find(arr, smaller));
console.log("Cube Arr : " , find(arr, cuber));