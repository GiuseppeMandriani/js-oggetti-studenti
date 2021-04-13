console.log('JS Ok');
console.log('JQ', $);

$(document).ready(function(){

    /**
     * Descrizione
     * 
        - Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
        - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
        - Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

     */

        // FASE 1 Creazione oggetto studente con relative key

        var studente = {
            Nome: 'Giuseppe',
            Cognome: 'Mandriani',
            Età: 32,
        }

        // console.log(studente);


        // Utilizzo for in per iterare all'interno dell'oggetto 
        
        for ( var key in studente){
            // console.log(key)                            // Per visualizzare tutte le proprietà dell'oggetto
            // console.log(studente[key]);                    // Per visualizzare i valori delle proprietà dell'oggetto
            console.log(key, studente[key]);            // Per visualizzare proprietà e valori dell'oggetto

        }











    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/