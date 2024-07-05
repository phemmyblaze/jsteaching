// alert("Welcome to today's class");

let firstName = "George"; ///CamelCase
const KodeCamp = "kodecamp"; /// PascalCase
const kode_camp = "kodecamp";
let _kodecamp = "kodecamp";
let FirstName;

firstName = "Samson";

const surname = "Emmanuel";

var userName = "phemmyblaze";
userName = "jamesBrown";

console.log(userName);

// alert("my name is " + firstName + " " + surname);

firstName;

let FIRSTNAME = "Akinuliola";

const nationality = "Nigerian";
let tribe = "calabar";
tribe = "ondo";

// nationality = "spanish";
console.log(tribe);

///Object
let samson = {
	firstName: "Samson",
	surName: "John",
	age: 30,
	nationality: "spanish",
	city: "Madrid",
	drive: true,
};
console.log(samson.firstName);
/// primitive

let age = 30; ///Number
let school = "OAU"; //// STRING
let full = true; /// boolean
let country; ///undefined
let state = null; ///Null
let PI = 3.1445;

let BigInt = 3000000000;

//basic operations addition, multiplication, division, subtract,

const addition = 2024 * 1994;
const multiplication = 2024 * 1994;
const division = 2024 / 1994;
const subtract = 2024 - 1994;
console.log(addition, multiplication, division, subtract);

console.log("This is sum of adding 2024 and 1994 together", +addition + " " + "on line 60"); /// concatenation
console.log(`This is sum of adding 2024 and 1994 together ${addition} on line 61`); /// template literal {}

const driveAge = 18;
const dob = 2020;
const jacobAge = 2022 - dob;

const driveLicense = true;

const random = 1 + "1";

const string = 7;
console.log(random !== string);

console.log(random);

console.log(jacobAge);
/////IF/ELSE STATEMENT
if (jacobAge > driveAge && driveLicense === true) {
	console.log("Yes Jacob can drive");
} else {
	console.log("No Jacob can't drive");
}

const passMark = 40;
let studentScore = 35;

studentScore = 75;

if (studentScore >= passMark) {
	console.log("You passed the course");
} else {
	console.log("You failed the course");
}

////TERNARY OPERATION

const damiAge = 13;
const wine = damiAge >= 18 ? "Dami can drink wine" && "Dami can only drink water and wine" : "drink water";

console.log(wine);

////FUNCTION

///Normal function
function greeting(name, greeter) {
	return console.log(`Hello ${name}, my name is ${greeter}`);
}

greeting("hillary", "Benjamin");
greeting("Francisca");
greeting("Adelaja");
greeting("Afolabi");

const friends = "ggdggd";
///ARROW FUNCTION
const goodBye = (name) => {
	return console.log(`Goodbye ${name}, enjoy your weekend`);
};

goodBye("Abraham");

const foodProcess = (fruit, oranges) => {
	console.log(fruit, oranges);

	const juice = `Juice with ${fruit} apples and ${oranges} oranges`;

	return juice;
};

const appleJuice = foodProcess(5, 0);
const orangeJuice = foodProcess(2, 20);

console.log(appleJuice);
console.log(orangeJuice);

/////FOR LOOP
console.log("Press up 1 ");
console.log("Press up 2 ");
console.log("Press up 3 ");
console.log("Press up 4 ");
console.log("Press up 5 ");
console.log("Press up 6 ");
console.log("Press up 7 ");
console.log("Press up 8 ");
console.log("Press up 9 ");
console.log("Press up 10 ");

for (let pushUpcount = 1; pushUpcount <= 50; pushUpcount + 1) {
	console.log(`Press up ${pushUpcount}`);
}

/////// WHILE LOOP
let pressUp = 1;

while (pressUp <= 50) {
	console.log(`While: Press up ${pressUp}`);
	pressUp++;
}
