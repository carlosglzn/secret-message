let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Length of the secretMessage array
console.log(secretMessage.length);

// Remove the last string of the array
secretMessage.pop();

// Check new length of the array
console.log(secretMessage.length);

// Adding words 'to' and 'Program' at the end of the array
secretMessage.push("to", "Program");

//Changing the word easily to right
secretMessage[7] = "right";

// Removing the first string of the array
secretMessage.shift();

// Adding the string 'Programming' to the beginning of the array
secretMessage.unshift("Programming");

//Removing strings 'get', 'right', 'the', 'first' and 'time', and replacing it with the string 'know'
secretMessage.splice(6, 5, "know");

// Print the secret message as a sentence
console.log(secretMessage.join(" "));
