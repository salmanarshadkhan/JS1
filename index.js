/*function output (apple, mango)
{
console.log(apple, mango)
const juice = `there  are total ${apple} apples and ${mango} mangos `
return juice;
}
console.log(output(2*3,3*7))

function add (a){
  console.log(a)
const summ = ` Sum of both number is ${a*a}`
return summ;
}

console.log(add(2)); 

function cutpiece (apple,mango){
  const cutpiecedone = `you have ${apple*4} apple and ${mango*4} mangos`
return cutpiecedone;
}
 console.log(cutpiece(21,10));

 function completejuice (cutpiece){
const juicee= `You has ${apple} apples and  ${mango} mongo and now i divided to ${cutpiece} `  
 return juicee;
 }
 
 console.log(juicee)
} */
// First function: calculates the pieces
function multiple(apple, mango) {
  const cutpieceapple = apple * 3;
  const cutpiecemango = mango * 3;
  return { cutpieceapple, cutpiecemango };
}

console.log(multiple(2, 10)); // { cutpieceapple: 6, cutpiecemango: 30 }

function final(apple, mango) {
  const totalPieces = multiple(apple, mango); // ✅ call the first function
  const finalresult = `Now you have ${apple} apples and ${mango} mangos, and total pieces cut are ${totalPieces.cutpieceapple + totalPieces.cutpiecemango}.`;
  return finalresult;
}

console.log(final(5, 10));
