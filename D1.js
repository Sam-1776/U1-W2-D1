/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// String = tipo che si usa per le variabili che devono contenere parole che sono definite tra apici
// Number = tipo che si usa per le variabili che devono contenere numeri non necessitano apici
// Boolean = unico tipo che ha solo due valori true e false e si usano per i controlli
// Undefined = indica che una variabile non ha assegnata nessun valore
// Null = tipo per una variabile volutamente inizializzata senza valore successivamente aggiunto
// Symbol = tipo che indica un unico identificatore che puo essere usato i vari modi

/* ESERCIZIO 2
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa. */

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Samuele";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Simeone";
const y = 5;
console.log(name);
console.log(y);
/* y = 10;
console.log(y); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhone";
let name2 = "Jhone";
console.log(name1 === name2);
name2 = name2.toLowerCase();
console.log(name1 === name2);
