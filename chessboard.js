let size = 8;
let board = "";

// Outer loop for rows
for (let i = 1; i <= size; i++){
    // inner loop for columns
    for (let j = 1; j <= size; j++){
        if ((i + j) % 2 == 0){ // check if column is even
            board += " ";
        } else { // check if column is odd
            board += "#";
        }
    }
    board += "\n"; // jump to next row
}
console.log(board);
