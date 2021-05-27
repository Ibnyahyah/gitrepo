// Even number
for (let i = 1; i < 50; i+2) {
        console.log(i); 
    
}

while(i <= 50){
    i = i+2;
    console.log(i);
}
// ASCII Art
for (let i = 1; i <= "$$$$$$"; i+"$"){
  console.log(i);
}


// fizzBuzz

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    }
    if (i % 5 === 0) {
        console.log('Buzz');
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else{
        console.log(i);
    }
}