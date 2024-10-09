console.log('train ticket');

const formEl = document.querySelector('.container')
console.log(formEl);


//output
const ticketEl = document.querySelector('.ticket');




formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    //console.log(e.target.memberDistance.value, e.target.memberAge.value);

    //creo le const

    const memberDistance = e.target.memberDistance.value;
    const memberAge = e.target.memberAge.value;
    const memberTicket = memberDistance*0.21;
    console.log(memberDistance, memberAge, memberTicket);

    if( memberAge < 18){
        let userUnderTicket = memberTicket/100*20;
        let userUnderTicketFix = userUnderTicket.toFixed(2)
        //console.log(userTicket);
        //modifico l'inner element dell'html per fissare un output
        ticketEl.innerHTML = `Il prezzo del biglietto è ${userUnderTicketFix}`
      }else if(memberAge > 65){

        let userOverTicket = memberTicket/100*40;
        let userOverTicketFix = userOverTicket.toFixed(2)
        ticketEl.innerHTML = `Il prezzo del biglietto è ${userOverTicketFix}`
    
      }else{ 
        ticketEl.innerHTML = `Il prezzo del biglietto è ${memberTicket}`
      }
    
   



    

    

    

    
})
/*
const distanceEl = document.querySelector(".distance");
const ageEl = document.querySelector(".age");

const btnEl = document.querySelector("btn");

const distance = field.value;
const age = field.value;

*/
