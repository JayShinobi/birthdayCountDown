function bDayTimer () {
let birthday = Date.parse("2022-08-21T03:18:00")
let today = new Date()
let diff  = birthday - today 

let secs = Math.floor((diff % (1000 *60))/ 1000)
let mins = Math.floor((diff % (1000 * 60 * 60 ))/ (1000 *60))
let hours = Math.floor((diff % (1000 * 60 *60 * 24))/ (1000 *60 *60))
let days = Math.floor(diff / (1000 * 60 * 60 * 24 ))

document.getElementById('clock').innerHTML =   
`<div class ='m-2'> ${days} <span style = 'color: white' > Days </span> </div>
<div class ='m-2'> ${hours} <span style = 'color: white' > Hours </span> </div>
<div class ='m-2'> ${mins} <span style = 'color: white' > Minutes </span> </div>
<div class ='m-2'> ${secs} <span style = 'color: white' > Seconds! </span> </div>`

if (diff<0){
    clearInterval(bDayTimer)
    document.getElementById('clock').innerHTML = 'ITS MY BIRTHDAY!🥳'
}
}



//add id to clear 
setInterval(bDayTimer, 1000)


