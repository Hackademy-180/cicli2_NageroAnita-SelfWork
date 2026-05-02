// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. 
// Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.

// INIZIO E CONTO QUANTI NUMERI CI SONO PARI
let conta = 0; 


// SOMMO TUTTI I NUMERI DISPARI POI, PRIMA LI ID.
let disposiZione = 0;

// I= INDICE PARTE DA UNO ED ARRIVA A VENTI
for( let i = 1; i <= 20; i++) {


    // QUI CHIEDO SE IL MIO INDICE: I FOSSE PARI; 
    if(i % 2 === 0){

            console.log(i);
                
// ALTRIMENTI

            }else {

                disposiZione += i;

                conta++;

            }

                }
// trova un ciclo infinito;per fare la conta; i è dispari; aggiungi numero, sommi ed incrementi all'aumento il contatore (++)!!!


// ORA CALCOLO LA MEDIA

if(conta > 0){

    let media = disposiZione / conta;

    console.log(`Media di num. dispari è: ${media}`);

}else{
 
    console.log(`Totale dei numeri dispari: ${conta}`);
    console.log(`Somma dei dispari è: ${disposiZione}`);


        }


console.log("Altra Opzione per fare Operazione;");



        for (let i = 1; i <= 20; i++) {

    if(i % 2 === 0){

        console.log("");

    } else {
        disposiZione += i;

        conta++;
           // n° dispari qui.
        console.log(`dispari è  : ${i}`);
    }
}