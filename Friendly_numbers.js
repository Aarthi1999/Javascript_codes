/*The friend of a number is the sum of its perfect divisors, E.g.,Friend of 18 is 21 (1+2+3+6+9)
2 numbers are best friends of they are friends with each other E.g., Friend of 220 is 284 and friend of 284 is 220.
What is the sum of all best friends under 10000?
Note: A number cannot be best friends with itself.*/

var bestfrndsum=0,num;//

for(num=1;num<9999;num++)
{
var i,sum;
var frnd=friends(num)
var bestfrnd=friends(frnd)

function friends(num)
{ 
  sum=0;
for(i=1;i<num;i++)
{
 if(num%i==0)
 {
   sum=sum+i;
 }
}  

return sum;
}
if(num==sum)
{
  bestfrndsum=bestfrndsum+num;
  
}
}

console.log(bestfrndsum);





