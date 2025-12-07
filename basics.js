
//block scoped diclaimer block are the {}
if(true){
  let myskills=45;
    console.log(myskills);
}
//indexing we access by using the []
const greetings="Holla";
console.log(greetings[0]);
console.log(greetings[1]);
console.log(greetings[2]);

//to get the last character but not the last index we do it like this

console.log(greetings[greetings.length-1]);

//template literals
const shadowOfRed=101;

console.log(`we have this ${shadowOfRed}`);

//comparisons
const isMember=20;
const notAmember=30;
const name = isMember>notAmember ? "uwimana" : "mukamana";
console.log(name);

const retryLimit =10;
const numRetries=9;

//terinary Operators
let messageStatus =retryLimit<numRetries?"pending":"failed :(";
console.log(messageStatus);

let myName=null;
//if true then return anonymous
//if false then return the value of myName which is null
console.log(myName ?? "Anonymous")



 const names="James";
 const provider="ATT";
  const phone="555-123-567";
  //we dont use the quotation to declare null
 const subscriptionType=null;
//instead of writimg the null so when the condition is true he is gnna return the value of the null
console.log(`creating a${subscriptionType ?? "Guest"} profile for ${name} with ${provider} at ${phone} .` );

function combineStrings(str1,str2){
return str1 + str2;
}
console.log(combineStrings("hello","December"));
console.log(combineStrings("hope","you will be the best month ever"));
console.log(combineStrings("Happy Birthday in advance","Baby Jesus"))

//function hoisting function can be called before defined
sayHY();
function sayHY(){
  console.log("i just wanna say hello");
}
//scope

function getMessageStatus(message){
let messageStatus="Processing";
function isValidLength(message){
  let messageStatus="invalid";

  if (message.length>0){
    messageStatus="valid"
  }
  return messageStatus;
}
return  isValidLength(message);

}
