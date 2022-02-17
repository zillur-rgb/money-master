const inCome = document.getElementById("income-input");

const food = document.getElementById("food-input");

const rent = document.getElementById("rent-input");

const clothes = document.getElementById("clothes-input");
const expenses = document.getElementById("total-expense");
const balance = document.getElementById("balance");

function totalExpenses(a, b, c) {
  let total = parseFloat(a) + parseFloat(b) + parseFloat(c);
  return total;
}

function totalBalance(totalIncome, totalExpense) {
  return totalIncome - totalExpense;
}

function percantage(totalIncome, saveAmount) {
  return totalIncome * (saveAmount / 100);
}

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    if (
      parseFloat(food.value) < 0 ||
      parseFloat(rent.value) < 0 ||
      parseFloat(clothes.value) < 0
    ) {
      alert("you cannot enter negative value");

      expenses.innerText = "00.00";

      balance.innerText = "00.00";
    } else {
      const totallyExpense = totalExpenses(
        food.value,
        rent.value,
        clothes.value
      );

      if (totallyExpense > parseFloat(inCome.value)) {
        alert("khajna theke bajna beshi");
        balance.innerText = "00.00";
        expenses.innerText = "00.00";
      } else {
        balance.innerText = totalBalance(
          parseFloat(inCome.value),
          totallyExpense
        );
        expenses.innerText = totallyExpense;
      }
    }
  });

document.getElementById("save-button").addEventListener("click", function () {
  const saveInput = document.getElementById("save-input");
  let saveInputValue = parseFloat(saveInput.value);
  let savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = percantage(parseFloat(inCome.value), saveInputValue);

  if (savingAmount.innerText > balance.innerText) {
    alert("Balance must be greater than saving");
  } else {
    const reamainBalance = document.getElementById("remain-balance");
    reamainBalance.innerText = balance.innerText - savingAmount.innerText;
    savingAmount.innerText;
  }
});