// Reunion Scrum Daily StandUp
//Primera pregunta, ¿ Que hiciste ayer


console.log("Que hiciste ayer?:");
    process.stdin.once('data', (input) => {
    console.log(`Ayer hiciste  ${input}`);

        console.log("En que vas a trabajar hoy?:");
            process.stdin.once('data', (input) => {
            console.log(`Hoy vas a trabajar en  ${input}`);

                console.log("Que dificultades tienes ?:");
                    process.stdin.once('data', (input) => {
                    console.log(`Tus dificultades son :  ${input}`);

    process.exit();
    
});
});
});



