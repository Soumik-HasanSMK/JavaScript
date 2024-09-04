// let n=50;
// let even=[];
// for(let i=0;i<=n;i++)
// {
//     if(i%2==0){
//         even.push(i);
//     }

// const evenOdd=(array)=>{
//     let even=[];
//     let odd=[];
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]%2===0)
//             even.push(array[i]);
//         else
//             odd.push(array[i]);
//     }
//     return odd;
// };

// const number=[1,2,3,4,5,6,7,8,9,10];
// const result = evenOdd(number);
// console.log(result);

//Distructing Array

// const Student=["Soumik", "CSE", 72, 34];
// const [name,dept,batch,roll]=Student;
// console.log(name);
// console.log(`My name is ${name}, department of ${dept}, batch number D-${batch}, roll: ${roll}`);

//to avoid "[]" we can use ...
// let array1=[1,2,3,4,5];
// let array2=[6,7,8,9,10];
// let newArray=[...array1, ...array2];
// console.log(...array1);
// console.log(...array2);
// console.log(...newArray);



//To find a biggest name in an array

const check = (array) => {
    let bigName = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > bigName.length)
            bigName = array[i];
    }
    return bigName;
};

const name = ["Soumik Hasan", "Jahid", "Abdul Alim", "Alvi", "Shihab", "Rasel"];
const biggestName = check(name);
console.log(biggestName);
