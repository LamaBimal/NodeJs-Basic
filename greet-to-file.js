const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const writeGreetingToFile = (name)=>{
    fs.writeFile('greeting.txt',`Hello ${name}`, error=>{
        if(error)
            console.log("Error occurred while writing to file")
    });
};

rl.question('what is your name?',(name) =>{
    writeGreetingToFile(name);
    rl.close();
});