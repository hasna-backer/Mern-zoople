var n = 5; // Number of rows

// Outer loop for rows
// for (var i = 1; i <= n; i++) {
//     var row = "";
//     // Inner loop for stars in each row
//     for (var j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

var n = 4; // Size of the square

// Outer loop for rows
for (var i = 0; i < n; i++) {
    var row = "";
    // Inner loop for stars in each column
    for (var j = 0; j < n; j++) {
        row += "* ";
    }
    console.log(row);
}
