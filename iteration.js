function number(){
    loop1:
for ( i = 1; i <= 100; i++) {
  if (i < 200) {
    continue loop1;
  } else {
    console.log(i);
  }
}
}
number();