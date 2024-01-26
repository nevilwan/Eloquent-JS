console.log(`Down on the sea`);
console.log("Lie on the ocean");
console.log('Float on the ocean \n');

// escape character
console.log("This is the first line\nAnd this is the second");
console.log("A newline character is written like \"\\n\".\n");

// string concatenation
console.log("con" + "cat" + "e" + "nate\n");

// tempelate literals
console.log(`half of 100 is ${100 / 2}\n`);

// unary operators
console.log(typeof `half of 100 is ${100 / 2}`);
console.log(typeof "x");
console.log(typeof 23.9 + "\n");

// binary and unary operator
console.log(- (10 -2) + "\n");

// boolean values
console.log(3 > 2);
console.log(3 < 2 + "\n");
console.log("Aardvark" < "Zoroaster");
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
console.log(NaN == NaN + "\n");

// logical operators
console.log(true && false);
console.log(true && true + "\n");
console.log(false || true);
console.log(false || false + "\n");
console.log(1 + 1 == 2 && 10 * 10 > 50);
console.log(true ? 1 : 2);
console.log(false ? 1 : 2 + "\n");

// automatic type conversion
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 2 + "\n");
console.log(false == 0 + "\n");
console.log(null == undefined);
console.log(null === undefined);
console.log(null !== undefined);
console.log(null == 0 + "\n");

// short-circuiting of logical operators
console.log(null || "user");
console.log("Agness" || "user \n");
console.log(NaN || 0);
console.log(NaN || undefined);
console.log(NaN || "");
console.log(false || "x");
console.log(false && "x");
