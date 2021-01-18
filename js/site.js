document.getElementById("btnCalculate").addEventListener("click", calculate);
document.getElementById("theTable").innerHTML = ""

function calculate(){
    let loan = parseInt(document.getElementById("loan").value);
    let term = parseInt(document.getElementById("term").value);
    let rate = parseInt(document.getElementById("rate").value);
// get monthly pmt calculations
//  monthlyPmt = loan * (rate/1200) / Math.pow(x,y)
// var x = 1 - (1 + (1 + rate/1200))
// var y = -term
   var x = (1 + rate/1200)
   var y = -term
   var z = loan*(rate/1200)
   var l = 1 - Math.pow(x,y)
   var q = z / l
// need to work on getting it in dollars, decimal 
document.getElementById("monthlyPmt").innerHTML = `$${q.toFixed(2)}`;
document.getElementById("totalPrin").innerHTML = `$${loan.toFixed(2)}`;
// will need to wait to get "totalInt"
document.getElementById("totalInt").innerHTML = `$${totInt.toFixed(2)}`; 
document.getElementById("totalCost").innerHTML = `$${(loan + totInt).toFixed(2)}`;

    //  TABLE
// Months    = the term input
// Payment   = "monthlyPmt"(q)
// Principal = "monthlyPmt"(q) - interest payment(below)
// Interest  =  previous remaining balance * rate/1200  LOOP...
// Total Int = current month's interest plus previous months  LOOP...
// Balance   = previous remaining balance - principal pmt


// the original "previous balance" is always the loan e.g.25,000 (like 1st bld in SunsetHills
//   ..so start loop at 1) Need to include the last value, so <= the length instead of <
// need to set "remaining balance" and "prev remaining balance" for Interest and Balance
// need to set Int Pmt as "int" and Prin Pmt as "prin"
// total interest LOOP
// Column 1 is months
//   document.getElementById("months").innerHTML = term; ??? needs to loop
// Column 2 is
//   document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
// Column 3 is
// document.getElementById("prin").innerHTML = `$${(q - (prevBal * rate/1200)).toFixed(2)};`
// Columnn 4 is
// document.getElementById("int").innerHTML = `$${(prevBal * rate/1200).toFixed(2)}`;
// Column 5 is
// document.getElementById("totInt").innerHTML = `$${(totalInt).toFixed(2)}`;
// Column 6 is
// document.getElementById("balance").innerHTML = `$${(prevBal - pmtPrinTotal).toFixed(2)};
// start remaining/previous balance as the full loan

// break into two functions -  one for the first month, then a loop
document.getElementById("months").innerHTML = `1`;
document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
document.getElementById("prin").innerHTML = `$${(q - z).toFixed(2)}`;
document.getElementById("int").innerHTML = `$${z.toFixed(2)}`;
document.getElementById("totInt").innerHTML = `$${z.toFixed(2)}`; 
document.getElementById("balance").innerHTML = `$${(loan - (q-z)).toFixed(2)}`;

// remaining months remember to start at 1 not 0 and include last month <=
// set prevBal first since the others incorporate...same w/ interest before prin
var month = [];
for (loop = 1; loop <= term; loop++){
  month += loop;
  let bal = loan - pmtPrin;
  let prevBal = bal - pmtPrin; 
  let pmtPrin = q - pmtInt;
  let pmtInt = prevBal * rate/1200;
  let totInt = [];
  let balance = prevBal - pmtPrin;

  totInt.push(pmtInt);
}
//   document.getElementById("months").innerHTML = month;
//  document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
//  document.getElementById("prin").innerHTML = `$${pmtPrin.toFixed(2)}`;
//  document.getElementById("int").innerHTML = `$${pmtInt.toFixed(2)}`;
//  document.getElementById("totInt").innerHTML = `$${totInt.toFixed(2)}`;
//  document.getElementById("balance").innerHTML = `$${balance.toFixed(2)}`;

document.getElementById("theTable").innerHTML += `<tr>
<td scope="row">${loop}</td>
<td>${q}</td>
<td>${pmtPrin}</td>
<td>${pmtInt}</td>
<td>${totInt}</td>
<td>${balance}</td></tr>`
}