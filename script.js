console.log("inizio esecuzione");
function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);
}
    if (num >=0 && numero <= 255) {
      document.getElementById("outText").innerHTML ="Hai inserito il numero " + numero;
}
else {
  document.getElementById("error").innerHTML ="Il numero non e";
}
    
function reset() {
  document.getElementById("inNumber").value = ""; 
}
