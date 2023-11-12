//pass function with arguments to function
function findMin(f){
    return(
        (...args)=>{
            return f(...args);
        }
    )
}

console.log(findMin(Math.min)(1,2,3));

//map, filter, reduce

let arr = [5, 4, 3, 7, 15];

// console.log(()=>{});

// console.log(()=>{});

// console.log(()=>{});

// arr.filter()

console.log(
    arr.filter((element)=>{
        if(element > 6){return element};
    })
);

console.log(
    arr.map((val, index, array)=>{
        console.log("index: " + index + " arr from map: " + array);
        if(val > 6) return val+1;
    })
);

console.log(arr);

console.log(
    arr.reduce((prev, current) => {
        return prev+current;      
    })
);