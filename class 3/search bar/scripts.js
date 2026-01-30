let str=prompt("enter your query");
let trim=str.trim();
console.log(trim)
let uppercase=str.toLocaleUpperCase();
console.log(uppercase);
let lowercase=str.toLocaleLowerCase();
console.log(lowercase);
let extract=str.substring(5,15);
console.log(extract);
let sli1=str.slice(5,15);
console.log(sli1);


// Given input
let searchQuery = "  Learn JavaScript Functions Arrow LIFE  ";

// 1. Trim the input string
let cleanedQuery = searchQuery.trim();
console.log("Cleaned String:", cleanedQuery);
console.log("Length:", cleanedQuery.length);

// 2. Convert to lowercase and uppercase
let lowerCaseQuery = cleanedQuery.toLowerCase();
let upperCaseQuery = cleanedQuery.toUpperCase();
console.log("Lowercase:", lowerCaseQuery);
console.log("Uppercase:", upperCaseQuery);

// 3. Extract the word "JavaScript"
// Using substring()
let jsWord1 = cleanedQuery.substring(6, 16);
console.log("Extracted (substring):", jsWord1);

// Using slice()
let jsWord2 = cleanedQuery.slice(6, 16);
console.log("Extracted (slice):", jsWord2);

// 4. Check whether query contains keywords
console.log("Contains 'functions':", lowerCaseQuery.includes("functions"));
console.log("Contains 'arrow':", lowerCaseQuery.includes("arrow"));
console.log("Contains 'life':", lowerCaseQuery.includes("life"));

// 5. Character at index 6 and ASCII value of first character
console.log("Character at index 6:", cleanedQuery.charAt(6));
console.log("ASCII of first character:", cleanedQuery.charCodeAt(0));

// 6. Case-insensitive check for 'javascript'
console.log(
  "Case-insensitive 'javascript' check:",
  lowerCaseQuery.includes("javascript")
);


