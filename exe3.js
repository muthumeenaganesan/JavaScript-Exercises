var myArray= [5, [22], [[14]], [[4]],[5,6]];
var newArray1=[];

for(var i=0;i<myArray.length;i++){
  if(myArray[i] instanceof Array){
      for(var j=0;j<myArray[i].length;j++){
        if(myArray[i][j] instanceof Array){
            for(var k=0;k<myArray[i][j].length;k++){
              newArray1.push(myArray[i][j][k]);
          }
    }else{
        newArray1.push(myArray[i][j]);
    }
}
}else{
  newArray1.push(myArray[i]);
}

}
console.log(newArray1);
