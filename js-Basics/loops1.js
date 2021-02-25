//loop: while, dowhile, for
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let j = 3;
while (j) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert(j);
  j--;
}


let k = 0;
do {
  alert(k);
  k++;
} while (k < 3);

for (let l = 0; l < 3; l++) { // shows 0, then 1, then 2
    alert(l);
  }

  /*
  for (begin; condition; step) {
  // ... loop body ...
  }

  begin:	i = 0	Executes once upon entering the loop.
  condition:	i < 3	Checked before every loop iteration. If false, the loop stops.
  body:	alert(i)	Runs again and again while the condition is truthy.
  step:	i++	Executes after the body on each iteration.
  */

 let sum = 0;

 while (true) {
 
   let value = +prompt("Enter a number", '');
 
   if (!value) break; // (*)
 
   sum += value;
 
 }
 alert( 'Sum: ' + sum );


 for (let m = 0; m < 10; m++) {

    // if true, skip the remaining part of the body
    if (m % 2 == 0) continue;
  
    alert(m); // 1, then 3, 5, 7, 9
  }