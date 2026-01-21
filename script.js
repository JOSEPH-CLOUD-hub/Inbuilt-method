// // string methods
// // 1. Length it returns the length of the string.

// let str = "The Hello World the the omo the";
// console.log("Lenhgth of string:", str.length);

// // 2. touppercase() : it converts the string to upper case.

// console.log("Uppercase string:", str.toUpperCase());

// //  3. tolowercase() : it converts the string to lowercase.

// console.log("Lowercase string", str.toLowerCase());

// //  4. charAt(): It returns the character at the specific index.
// console.log("Character at index 4:", str.charAt(4));

// // indexof(): It returns the index of the first occurence of a specified value in a string

// console.log("Index of 'fox':", str.indexOf("fox"));
// console.log("Index of 'cat':", str.indexOf("the"));
// console.log(str.toLowerCase().indexOf("the"));

// // chaining method 




// slicing method it extracts a section of string and returns it as a new string.
// console.log("cont")





// concat method


// split method


// join method

// let fullName = "babalola joseph";
// let splitNames = fullName.split(" ");
// let firstName = splitNames[0];
// let lastName = splitNames[1];
// let modifiedFullName;

// if (firstName != NaN && lastName != NaN) {
//   let modifiedFirstName =
//     firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//   let modifiedLastName =
//     lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
//   modifiedFullName = `Full name is: ${modifiedFirstName} ${modifiedLastName}`;
//   console.log(modifiedFullName);
// } else {
//   console.log("There's issues w your name.");
// }


let username = prompt("Enter your username:").toLowerCase();
let words = username.split(' ');
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let titleCaseName = words.join(' ');
alert(titleCaseName);
