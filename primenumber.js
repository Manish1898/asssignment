function primeNumber(){
var i = 2;
while (i <= 500) {
  var isPrime = true;
  for (var j = 2; j*j<= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
  i++;
}
}
primeNumber();