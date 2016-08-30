var n=process.argv[2];
var x=0;
var y=1;
var z;

for(i=0; i<=n; i++)
{
  if(i==0){
    console.log(x);
  }else if(i==1)
  {
    console.log(y);
  }else{

    z=x+y;
    x=y;
    y=z;
    console.log(z);
}
}
