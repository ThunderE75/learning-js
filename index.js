// Arrow Functions      An concise way to define a function 
//                      (parameter) => code 
//                      Prevents polluting the global namespace

let greet = (name,age)=> {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

greet("Navneet", 26)