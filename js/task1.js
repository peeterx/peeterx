/*Store name in a variable*/
var myName = "Peter Njoroge";

/*Store courses in an array*/
var courses = ["HTML", "CSS", "JavaScript", "UI / UX"];

console.log(myName); //Display name
console.log(courses); //Display courses

/*Number of courses are even; find and display all even numbers from 1-200(inclusive)*/
for (var i = 1; i <= 200; i ++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
