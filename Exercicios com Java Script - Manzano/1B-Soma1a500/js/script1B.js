let contadora = 1
let somatorio = 0

do{
    if (contadora % 2 == 0){ //% resto
        //somatorio += contadora
        somatorio = somatorio+contadora
        console.log(`Somatorio: ${somatorio}`)
    }
    contadora++
} while (contadora < 501)