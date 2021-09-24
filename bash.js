
process.stdout.write('prompt > ');

const pwd = process.cwd();

process.stdin.on('data', () => {
    //let cmd = data.toString().trim();
    
    //process.stdout.write('You typed: ' + cmd);
    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
    
});

//.toString().trim()