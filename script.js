const messages = ['First, solve the problem. Then, write the code.', 'YOU ARE THE CSS TO MY HTML', 'The are two ways to write error-free program; only the third one works', 'Talk is cheap. Show me the code.'];

// let test = messages[Math.floor(Math.random()*messages.length)];
// console.log(test);


function generateMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

console.log(generateMessage());