let str = "extravaganza";
let lastFour = str.slice(8);
console.log(lastFour); 

const food = 'The quick fox jumped over the lazy dog';
 console.log(food.replace(food[4], 'eat'));

const story = "The quick brown fox jumps over the lazy dog";
let countThe = (story.toLowerCase().split("the").length-1);
console.log(`"the" appears:${countThe} times`); 
let countBrown = (story.toLowerCase().split("brown").length-1);
console.log(`"brown" appears: ${countBrown} times`); 

const string1 = "The pupils are reading in the library";
let wordAre = string1.includes("are");
console.log(`"are" found: ${wordAre}`);
const string2 = "The child was sitting on the table before it fell";
let wordSitting = string2.includes("sitting");
console.log(`"sitting" found: ${wordSitting}`); 

//  UpperCase
let upperCaseStr = "wonderful".toUpperCase();
console.log(upperCaseStr); 

//  LowerCase
let lowerCaseStr1 = "amazing".toLowerCase();
console.log(lowerCaseStr1)
let lowerCaseStr2 = "UndERneath".toLowerCase();
console.log(lowerCaseStr2); 
// TitleCase
let message = 'A wonderful world'
         message1 = message.toLowerCase();
          console.log(message);
          message2 = message1.toTitleCase();
          console.log(message2);

