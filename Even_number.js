/*Define an array of numbers (use any random numbers). 
Write a program to print only the even numbers of the array. 
Do not use any library functions, need to do via for loops only*/

const ARRAY_LENGTH = 10
const randomArray = []
for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.floor(Math.random()*10))}
console.log(randomArray);
for(let i = 0; i<randomArray.length; i++) 
{
    if(randomArray[i]%2==0 && randomArray[i]!=0)
    {
     console.log(randomArray[i]);
    }
}
