console.log("Enter name: ");
var name = "user";

name = process.argv.slice(2);
console.log("Hello, " + name.join('') + " I want to play a little game >:D");

gallows = new Array("--------\n|      |\n|\n|\n|\n|\n=====",
"--------\n|      O\n|\n|\n|\n|\n=====",
"--------\n|      O\n|      |\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     /\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     / \\\n|\n=====");

console.log(gallows[gallows.length-1]);

