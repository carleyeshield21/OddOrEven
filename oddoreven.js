// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
   sumarr = array.reduce(
    (a, b) => a + b,
  )
  if(sumarr % 2 == 0){
      return console.log(`${sumarr} is an EVEN number`)
  } else {
    return console.log(`${sumarr} is an ODD number`)
  }
}
oddOrEven([0, 1, 4])
console.log('=====')
oddOrEven([0, -1, -5])