console.log("inizio esecuzione");
let d = new Date();
console.log(d);

let day = d.getDate();        
let month = d.getMonth() + 1;
let year = d.getFullYear();  

console.log(day + "/" + month + "/" + year);

document.getElementById("saluto").innerHTML=d.getDay();
let colori = [];


function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);
}
    if (num >=0 && numero <= 255) {
        colori.push(numero);
        
      document.getElementById("outText").innerHTML ="Hai inserito il numero " + numero;
        "Hai inserito il numero" + numero;
        
    document.getElementById("outText").innerHTML +="<br> I colori inseriti sono: " + colori;
    console.log(colori);
    
    if (colori.lengt == 3){
        document.getElementById("outText").style.color=`rgb(${colori[0]},${colori[1]},${colori[2]}})`;
        
    }
}
else {
  document.getElementById("error").innerHTML ="Il numero non e";
  document.getElementById("outText").innerHTML = numero
}
    
function reset() {
  document.getElementById("inNumber").value = ""; 
}
