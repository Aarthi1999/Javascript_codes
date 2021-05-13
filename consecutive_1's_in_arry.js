/*Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
*/

var array=[0,1,1,0,0,0,1,0,0,1,1,1,1,0],i,count=0,answer=0;
for(i=0;i<array.length;i++)
{ 
  if(array[i]==0)
  {
    count=0;
  }
  else
  {
    count++;
    answer = Math.max(answer, count);
  }
  
}
console.log(answer);