/* =====================================================
   JavaScript - New Practice Batch (40 Tasks) with Answers
   
   ===================================================== */


/* ================= PART 1: var, let, const ================= */

// 1. Create a variable named employeeName using var and assign your name.
var employeeName = "Arun";

// 2. Create a variable named employeeAge using let and assign your age.
let employeeAge = 25;

// 3. Create a variable named company using const and assign "Stackly".
const company = "Stackly";

// 4. Declare a variable salary using var and change its value twice.
var salary = 20000;
salary = 25000;   // first change
salary = 30000;   // second change

// 5. Declare a variable city using let and reinitialize it with another city.
let city = "Chennai";
city = "Mumbai";  // reinitialized (re-assigned)

// 6. Declare a variable course using var and redeclare it.
var course = "HTML";
var course = "JavaScript";  // redeclaring is allowed with var

// 7. Try redeclaring a variable named student using let.
let student = "Ravi";
// let student = "Kumar";
// ERROR: SyntaxError: Identifier 'student' has already been declared
// (let does NOT allow redeclaration in the same scope - commented out so the file keeps running)

// 8. Try changing the value of a variable declared using const.
const country = "India";
// country = "USA";
// ERROR: TypeError: Assignment to constant variable.
// (const value cannot be changed - commented out so the file keeps running)

// 9. Create three variables with the same value using var, let, and const.
var valueVar = "JavaScript";
let valueLet = "JavaScript";
const valueConst = "JavaScript";

// 10. Print all three variables in the console.
console.log(valueVar);
console.log(valueLet);
console.log(valueConst);


/* ================= PART 2: Printing Statements ================= */

// 11. Print your full name using console.log().
console.log("Arun Kumar");

// 12. Print your date of birth using console.log().
console.log("Date of Birth: 15-08-2000");

// 13. Print your company name using document.writeln().
document.writeln("Company Name: Stackly");

// 14. Print your designation using console.warn().
console.warn("Designation: Trainee Developer");

// 15. Print your department using console.error().
console.error("Department: Web Development");

// 16. Print your favourite food using console.log().
console.log("Favourite Food: Biryani");

// 17. Create a variable productPrice and print its value.
let productPrice = 1500;
console.log(productPrice);

// 18. Create a variable isStudent and print its value.
let isStudent = true;
console.log(isStudent);


/* ================= PART 3: User Input ================= */

// 19. Ask the user for their full name and print it in the console.
let fullName = prompt("Enter your full name");
console.log(fullName);

// 20. Ask the user for their favourite programming language and display it on the webpage.
let favLanguage = prompt("Enter your favourite programming language");
document.writeln(favLanguage);

// 21. Ask the user for their age and print it in the console.
let userAge = prompt("Enter your age");
console.log(userAge);

// 22. Ask the user for their mobile brand and display it on the webpage.
let mobileBrand = prompt("Enter your mobile brand");
document.writeln(mobileBrand);

// 23. Ask the user for their company name and print it in the console.
let companyName = prompt("Enter your company name");
console.log(companyName);

// 24. Ask the user for their favourite colour and display it using document.writeln().
let favColour = prompt("Enter your favourite colour");
document.writeln(favColour);

// 25. Ask the user for their city and age using separate prompt() statements. Display both on the webpage.
let userCity = prompt("Enter your city");
let userAge2 = prompt("Enter your age");
document.writeln("City: " + userCity);
document.writeln("Age: " + userAge2);


/* ================= PART 4: Alert and Confirm ================= */

// 26. Display "Welcome to JavaScript Training" using alert().
alert("Welcome to JavaScript Training");

// 27. Display "Are you ready to start learning?" using confirm().
confirm("Are you ready to start learning?");

// 28. Ask the user "Do you know HTML?" using confirm().
confirm("Do you know HTML?");

// 29. Display an alert asking the user to enter their name.
alert("Please enter your name");

// 30. Display a confirmation message asking whether the user wants to continue.
confirm("Do you want to continue?");


/* ================= PART 5: Console Methods ================= */

// 31. Print "Task Started" using console.log().
console.log("Task Started");

// 32. Print "Low Battery" using console.warn().
console.warn("Low Battery");

// 33. Print "Invalid Username" using console.error().
console.error("Invalid Username");

// 34. Print your name, age, and city using separate console.log() statements.
console.log("Name: Arun");
console.log("Age: 25");
console.log("City: Chennai");

// 35. Use console.clear() and print "Console Cleared".
console.clear();   // clears everything printed above
console.log("Console Cleared");

// 36. Create a variable trainingStatus and print it.
var trainingStatus = "In Progress";
console.log(trainingStatus);

// 37. Create a variable batchNumber and print it using console.warn().
let batchNumber = 12;
console.warn(batchNumber);

// 38. Create a variable errorMessage and print it using console.error().
const errorMessage = "Something went wrong";
console.error(errorMessage);

// 39. Print three different messages using three different console methods.
console.log("This is a normal message");
console.warn("This is a warning message");
console.error("This is an error message");

// 40. Create four variables using var, let, and const, then print their values using console methods.
var trainerName = "Suresh";
let batchTime = "10:00 AM";
const duration = "3 Months";
var location = "Chennai";

console.log(trainerName);
console.warn(batchTime);
console.error(duration);
console.log(location);
