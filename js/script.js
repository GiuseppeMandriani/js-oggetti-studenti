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


        // Fase 2 Creazione Array di Oggetti e ciclare all'interno dell'Array

        var listaStudenti = [
            {
                Nome: 'Giuseppe',
                Cognome: 'Mandriani',
                Età: 32,
                Residenza: 'Crema',
                Provincia: 'CR',
            },
            {
                Nome: 'Davide',
                Cognome: 'Chicco',
                Età: 25,
                Residenza: 'Milano',
                Provincia: 'MI',
            },
            {
                Nome: 'Sara',
                Cognome: 'Preziosa',
                Età: 30,
                Residenza: 'Foggia',
                Provincia: 'FG',
            },
            {
                Nome: 'Michele',
                Cognome: 'Vece',
                Età: 31,
                Residenza: 'Pavia',
                Provincia: 'PV,'
            }

        ]

        // console.log(listaStudenti);  // Stampo Array

        // Ciclo all'interno dell'array per poi stampare determinate chiavi degli oggetti

        for(var i = 0; i < listaStudenti.length; i++){

            var studenti = listaStudenti[i];

            // Stampo ogni singolo oggetto
            // console.log(listaStudenti[i]); 


            // Stampo il valore delle chiavi/proprietà che desidero
            console.log('Studente: ' + studenti.Nome + ' ' + studenti.Cognome );


            // Itero all'interno per stamparmi tutte le propriettà e i relativi valori delgli oggetti
            //  for (var key in listaStudenti[i]){
            //      console.log(key, listaStudenti[i][key]);
            // }
        }


        // Fase 3 Richiesta dati all'utente e inserimento nell'array precedente


        // Richiesta Dati
        
        var name = prompt('Inserire Nome');
        
        var cognome = prompt('inserire Cognome');
        
        var anni = parseInt(prompt('Inserire anni'));
        
        var student ={
            Nome: (name),
            Cognome:(cognome),
            Età:(anni),
        };

        console.log(student);

        // Inserimento nell'array
        listaStudenti.push( student );

        // Itero nell'arrey precedente e stampo contenuto completo
        for(var i=0; i<listaStudenti.length; i++){
            var studenti = listaStudenti[i];

            // console.log(listaStudenti[i]);

            console.log('Studente: ' + studenti.Nome + ' ' + studenti.Cognome + ' ' + studenti.Età );


            // for( var key in studenti){
            //     console.log(key, listaStudenti[i][key])

            // }


        }

















    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/