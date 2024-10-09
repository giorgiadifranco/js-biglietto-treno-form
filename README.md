# js-biglietto-treno-form

## Descrizione:
 Scrivere un programma che chieda all’utente:

    1. Il numero di chilometri da percorrere (prompt --> form in html/css)--> convertire in numero con parsInt/Float
    2. Età del passeggero ((-->form)) cnvertire in numero convertire in numero con parsInt/Float--> ci sarà un submit 
    3. Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
    
## regole biglietto:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni --> if ( age <18 ){applicare il 20%}
 - va applicato uno sconto del 40% per gli over 65. --> else if (age >65){
    applcare sconto 40% }


## MILESTONE 1: 
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input(type) e un bottone(submit) (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


## MILESTONE 2:
 Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
