// // var Quiz={
// //     Question1:"What is 2+2",
// //     Ans:4,
// //     options:{
// //         opt1:2,
// //         opt2:3,
// //         opt3:9,
// //         opt4:4
// //     },
    
// //     Question2:"What is 2+2",
// //     Ans:4,
// //     options:{
// //         opt1:2,
// //         opt2:3,
// //         opt3:9,
// //         opt4:4
// //         }

// // }










// // function next(){
// // var t=document.createElement("div")
// // var ft=document.createTextNode("Question 1");
// // t.appendChild(ft);
// // var g=Quiz.Question1.appendChild(t);
// // console.log(t);
// // }

//  // constructor function for objects 
// // function Employee(name,ID,Salary)
// // {
// //     this.name=name;
// //     this.ID=ID;
// //     this.Salary=Salary;
// //     this.SAL=function(){
// //         return this.Salary;
// //     }

// // }


// // var a=new Employee("Ahsan",732,30000);
// // var b=new Employee("Ah",73,000);
// // console.log(a);

//                                    //Proto-types in constructor function

// // function Employee(name,ID,Salary)
// // {
// //     this.name=name;
// //     this.ID=ID;
// //     this.Salary=Salary;
    

// // }
// // Employee.prototype.SAL=function(){
// //     return this.Salary;
// // }

// // var a=new Employee("Ahsan",732,30000);
// // var b=new Employee("Ah",73,000);
// // console.log(a);

// // function Employee(name,ID,Salary)
// // {
// //     this.name=name;
// //     this.ID=ID;
// //     this.Salary=Salary;
// // }
// // // console.log("constructor" in Employee)
// // //  console.log(Employee.hasOwnProperty("constructor"));

// // for(var key in "Employee")
// // {
// //     console.log(key);
// // }

// const questionList={
//     rules:{
//     Rule1:"Some Rules Regarding QUIZ </br>",
//     Rule2:"You have 5 Question Which you all attempt must.</br>",
//     Rule3:"You have 15 seconds for each Question to attempt. </br>",
//     Rule4:"I will close this link after 3 min. </br>",
//     Rule5:"At the end of Quiz,You will see your mark.</br>",
//     Btn1:"Move to Quiz"
//     },
  
//     Question1:{
//        q:"What is XML Stands for?",
//        Ans:"Extensible Markup language",
//        Option:{
//            opt1:"Extensible Markup language",
//            opt2:"Extended Marker Language",
//            opt3:"Intensible Marketplace"
//        }
//     },

//     Question2:{
//         q:"what is Enviornment?",
//         Ans:"Our sorrounding and its things",
//         Option:{
//             opt1:"Our sorrounding and its things",
//             opt2:"Our Neighbour Area",
//             opt3:"Our city and belongings"
//         }
//     },
//     Question3:{
//         q:"What is matter?",
//         Ans:"Which Have occupy space and volume",
//         Option:{
//             opt1:"Which grows gradually",
//             opt2:"which have movement",
//             opt3:"Which Have occupy space and volume"
//         }
//     },
//     Question4:{
//         q:"What is Science?",
//         Ans:"Knowledge of technology",
//         Option:{
//             opt1:"Knowledge of plants",
//             opt2:"Knowledge of technology",
//             opt3:"Knowledge of species"
//         }
//     },
//     Question5:{
//         q:"RAM Stands for?",
//         Ans:"",
//         Option:{
//             opt1:"Read Only Memory",
//             opt2:"Read accessible Memory",
//             opt3:"Random Access Memory"
//         }
//     }

// }


// function ytt(){
//      var btn=document.getElementById("div1");
//     //  let x=0;
//     //  for(x in questionList)
//     //  {
//     //     document.write(questionList.rules[x]);
//     //     x++;
//     //  }
//     //  document.write(questionList.rules.Rule1);
//     //  document.write(questionList.rules.Rule2);
//     //  document.write(questionList.rules.Rule3);
//     //  document.write(questionList.rules.Rule4);
//     //  document.write(questionList.rules.Rule5);
//     //  document.getElementById("div1").values=questionList.rules ;
//     //  var t=document.createElement("button");
//     //  var m=document.createTextNode("Move");
//     //  t.appendChild(m);
     
//     }
var count=0
function yes(){
   var q1_ans1=document.getElementById("html1");
   var q1_ans2=document.getElementById("css1");
   var q1_ans3=document.getElementById("javascript1");
   var q2_ans1=document.getElementById("html2");
   var q2_ans2=document.getElementById("css2");
   var q2_ans3=document.getElementById("javascript2");

   var q3ans1=document.getElementById("html3");
   var q3_ans2=document.getElementById("css3");
   var q3_ans3=document.getElementById("javascript3");

   var q4ans1=document.getElementById("html4");
   var q4_ans2=document.getElementById("css4");
   var q4_ans3=document.getElementById("javascript4");

   var q5_ans1=document.getElementById("html5");
   var q5_ans2=document.getElementById("css5");
   var q5_ans3=document.getElementById("javascript5");

   if(q1_ans1.checked==true)
   {
        
        count++;

   }
   if(q2_ans1.checked==true)
   {
      count=count+1;
   }
   if(q3_ans3.checked==true)
   {
    count=count+1;
   }
   if(q4_ans2.checked==true)
   {
    count=count+1;
   }
   if(q5_ans3.checked==true)
   {
    count=count+1;
   }

   document.write("<h2>Your result is </h2>" +count +"<b>/5</b>");




}
