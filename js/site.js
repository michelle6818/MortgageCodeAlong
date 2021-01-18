// wire button
document.getElementById("btnCalc").addEventListener("click",buildSchedule);

// calculate the loan payment
function calcPayment(amount,rate,term){
  return (amount * rate) / (1 - Math.pow(1 + rate, -term));
}

// calculate the interest for the current balance of the loan
function calcInterest(balance, rate){
   return balance * rate;
}

// this function will build our loan schedule
function buildSchedule(){
  //  get the value from the inputs
  let amount = document.getElementById("loanAmount").value;
  let rate = document.getElementById("loanRate").value;
  let term = document.getElementById("loanTerm").value;

  // convert input rate to a monthly rate
  rate = rate/1200;
 
  //calculate the payments

  // set up some variables that hold values in the schedule
   let payment = calcPayment(amount, rate, term);
   let balance = amount;
   let totalInterest = 0;
   let monthlyPrincipal = 0;
   let monthlyInterest = 0;
   let monthlyTotalInterest = 0;
  
   
  // write the results to our table
   let scheduleBody = document.getElementById("scheduleBody");
   let scheduleRow ="";
// reset the table
   scheduleBody.innerHTML = "";

   for (month =1; month <= term; month++){

       monthlyInterest = calcInterest(balance, rate);
       totalInterest += monthlyInterest;
       monthlyPrincipal = payment - monthlyInterest;
       balance = balance - monthlyPrincipal;
       
      //  write these values to the table
      scheduleRow = `<tr><td>${month}</td>
      <td>${payment.toFixed(2)}</td>
      <td>${monthlyPrincipal.toFixed(2)}</td>
      <td>${monthlyInterest.toFixed(2)}</td>
      <td>${totalInterest.toFixed(2)}</td>
      <td>${balance.toFixed(2)}</td></tr>`;

      scheduleBody.innerHTML += scheduleRow;
   }

   document.getElementById("totalPrincipal").innerHTML = Number(amount).toLocalString(
     "en-US",{
       style: "currency",
       currency: "USD",
     });

      document.getElementById("totalInterest").innerHTML = Number(totalInterest).toLocalString(
        "en-US",{
          style: "currency",
          currency: "USD",
        });
        document.getElementById("totalCost").innerHTML = Number(totalCost).toLocalString(
          "en-US",{
            style: "currency",
            currency: "USD",
          })
}