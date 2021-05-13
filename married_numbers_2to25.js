/*A pair of numbers are married if one perfectly divides the other. What number is married to all
numbers between 2 and 25?*/



function lcm_two_numbers(x, y) {

  return (x * y) / gcd_two_numbers(x, y);
}


function gcd_two_numbers(x, y) {

  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

var x,y,t,i,result=1;
for(i=2;i<=25;i++)
{
result=lcm_two_numbers(result,i);
}

console.log(result);