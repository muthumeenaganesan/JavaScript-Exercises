var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

console.log("----------------------------");
myfunction("Programmer");
console.log(">>>>>>>>>>>Desecending sorting >>>>>>>>>>>");
sort();
console.log("###################recreate array###########");
ourfunction();


function myfunction(p){
  for(var i=0;i<myObj.length;i++){
    if(myObj[i].occupation==p){
      console.log(myObj[i]);
    }
  }
}





function sort(){
  for(var i=0;i<myObj.length-1;i++){

    for(var j=i+1;j<myObj.length;j++ ){
      if(myObj[i].age < myObj[j].age){
          var temp = myObj[j];
          myObj[j] =myObj[i];
          myObj[i] = temp;
      }
  }

  }

  for(var i=0;i<myObj.length;i++){
      console.log(myObj[i]);
  }
  }


  console.log("....................Ascending order............................");

console.log(myObj.sort(function(a,b){return a.age > b.age}));


console.log("=====================================================================");


function ourfunction(){
  var array1=[];
  var array2=[];
  for(var i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Team Leader"){
        array1.push({name:myObj[i].name,age:myObj[i].age});
    }
    if(myObj[i].occupation=="Programmer"){
      array2.push({name:myObj[i].name,age:myObj[i].age});
    }
  }
  var jsonObj = {"Team Leader":array1,"Programmer":array2};
  console.log(jsonObj);
}
