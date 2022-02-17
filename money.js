const inCome = document.getElementById("income-input");



const food = document.getElementById("food-input");


const rent = document.getElementById("rent-input");

const clothes = document.getElementById("clothes-input");
const expenses = document.getElementById("total-expense");
const balance = document.getElementById('balance')




function totalExpenses(a,b,c){
    let total = parseFloat(a) + parseFloat(b) + parseFloat(c);
    return total
}

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
      const totallyExpense = totalExpenses(food.value,rent.value,clothes.value);
      expenses.innerText = totallyExpense ;
      
      balance.innerText= parseFloat(inCome.value) - totallyExpense;
    });
  
 
   
document.getElementById('save-button').addEventListener('click',function(){
    const saveInput = document.getElementById('save-input');
    let saveInputValue = parseFloat(saveInput.value);
    let savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText= parseFloat(inCome.value) * (saveInputValue / 100) 

const reamainBalance = document.getElementById('remain-balance');
reamainBalance.innerText =  balance.innerText - savingAmount.innerText;


})




