function toggleMenu(){
 document.getElementById("nav").classList.toggle("active");
}

function calcEMI(){
 let cost=+document.getElementById("cost").value;
 let rate=(+document.getElementById("rate").value/12)/100;
 let months=+document.getElementById("years").value*12;

 let emi=(cost*rate*Math.pow(1+rate,months))/(Math.pow(1+rate,months)-1);
 document.getElementById("emiResult").innerHTML="Monthly EMI: ₹"+emi.toFixed(0);
}
