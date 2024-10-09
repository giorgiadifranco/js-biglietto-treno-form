console.log('train ticket');

const formEl = document.querySelector('.container')
console.log(formEl);

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
        let userTicket = memberDistance/100*20;
        console.log(userTicket);
        
    
    }
    
   

    const memberTicketEl = ` <div class="row mb-3">
            <label for="inputnumber" class="age col-sm-2 col-form-label" name="memberTicket">Costo del biglietto</label>
            <div class="col-sm-10">
              <input type="number" class="ticket form-control" id="inputAge">
            </div>
          </div>` 

    

    

    

    
})
/*
const distanceEl = document.querySelector(".distance");
const ageEl = document.querySelector(".age");

const btnEl = document.querySelector("btn");

const distance = field.value;
const age = field.value;

*/
