// RIGHT ANGLE TRIANGLE


// for(i=1;i<=5;i++){
//     let row= ""   // to create row 
//     for(j=1;j<=i;j++){
//         row +="* " // to add star in row
//     }
//     console.log(row) // to print row
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("* ".repeat(i));
// }

    
// REVERSE RIGHT ANGLE TRIANGLE

// n=5;

// for(i=1;i<=5;i++){
//     let row = "";
//     for(s=1;s<=(n-i);s++){
//         row +=" "
//     }
//     for(j=1;j<=i;j++){
//         row +="*"
//     }
//     console.log(row)
// }

// Payramid

// n=5;

// for(i=1;i<=5;i++){
//     let row = "";
//     for(s=1;s<=(n-i);s++){
//         row +=" "
//     }
//     for(j=1;j<=2*i-1;j++){   // s+i wrong hoga reason s space bna k 5 mai chuka hoga tho 5+1-1=5 dega 
//         row +="*"
//     }
//     console.log(row)
// }
// for(i=5;i>=1;i--){
//     let row = "";
//     for(s=1;s<=(n-i);s++){
//         row +=" "
//     }
//     for(j=1;j<=2*i-1;j++){   // s+i wrong hoga reason s space bna k 5 mai chuka hoga tho 5+1-1=5 dega 
//         row +="*"
//     }
//     console.log(row)
// }

let n=5;

for(i=1;i<=n;i++){
    let row = "";
    for(s=1;s<=n-i;s++){
        row +=" "
    }
    for (j=1;j<=i;j++){
        row +="xl* "
    }
    console.log(row)
}

