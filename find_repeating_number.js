/*Suppose you have an array of 101 integers. 
This array is already sorted and all numbers in this array are consecutive. 
Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);*/

var array=[0,1,2,3,4,5,5,6],num;
for(i=0;i<array.length;i++)
{
  if(array[i]==array[i+1])
  {
    console.log(array[i]);
  }
  
}