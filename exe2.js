
var n=process.argv[2];
  for(var i=1;i<=n;i++){
    var row='';
    for(var j=1;j<=(i-1);j++){
       row+=' ';
     }
       for(var k=1;k<=(n-i+1);k++){
          row+='* ';
    }
    console.log(row);
  }
