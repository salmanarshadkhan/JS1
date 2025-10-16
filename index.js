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
} 
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

// const friends = ['salman','arshad', 'khan', 21211]
// console.log(friends[friends.length - 1]);

function age(birthyear ){
return 2030 - birthyear;
}
const aje = [2012,2022,2013,2014,2019]

 console.log(aje[0]);
 console.log(aje[1]);
 console.log(aje[2]);
 console.log(aje[3]);
 console.log(aje[4]);

 const bioData = ['salman arshad khan', '03104065017', 'kasur' , 'ucp' , 'BSCS']
console.log(bioData[bioData.length - 1]) 
const method = ['salman' , 'arshad ' , 'khan' , 'mayo', 'kasur']

console.log(method.includes('mayo')); 

const object = {
name : "salman",
father : "arshad_khan",
"house no" : "kasur_23",
}
console.log(object["house no"]); */

const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// calculate and store
const markk = mark.calcBMI();
const johnn = john.calcBMI();

console.log(markk.toFixed(3)); // 27.310
console.log(johnn.toFixed(3)); // 24.195

// compare
if (markk > johnn) {
  console.log(`Mark's BMI (${markk.toFixed(3)}) is higher than John's (${johnn.toFixed(3)})`);
} else {
  console.log(`John's BMI (${johnn.toFixed(3)}) is higher than Mark's (${markk.toFixed(3)})`);
}
