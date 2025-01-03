


var Es01 = 'Vai Mudar..'
var Es02 = 'Mudou !'
var p = document.getElementById('par')


if (p.innerHTML!=Es01 && p.innerHTML!= Es02){
    p.innerHTML=Es01
}

function titulo() {
       
   if (p.innerHTML == Es01){
        p.innerHTML = Es02
    } else{
        p.innerHTML=Es01
    } 
   
} 

