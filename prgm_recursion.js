/*f(1)=1
f(x)=(x-1)*f(x-1)
s(x)=sum of digits of x
Example f(5)=24 and s(f(5))=6
What is s(f(101))?*/


var x=101,num;

var num = f(x);

var result= s(num);

function f(x)
{
  if(x==1)
  return 1;
  else
  return (x-1)*f(x-1);
}

function s(num)
{
  var rem=0,final=0;
  while(num)
  {
    rem=parseInt(num%10);
    num=parseInt(num/10);
    final=final+rem;
  }
  return final;
}

console.log(result)