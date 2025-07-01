const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a number for age.");
} else if (age < 18) {
  console.log("You're too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink alcohol.");
} else {
  console.log("You can drink alcohol, but you should be careful.");
}