// Repaso de ayer con programacion asincrona
//console.log("1");

//setTimeout(() => {
   // console.log("2");
//},3000);

//console.log("3");

//console.log(global.process);

process.stdin.on('data', (input) => {
    console.log(`Has dicho  ${input}`);
    process.stdout.write(`Has dicho 2  ${input}`);
    //process.exit();
});


process.stdin.on('end', (input) => {
    process.stdout.write(`Has dicho 2  ${input}`);
    process.exit();
});