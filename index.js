const Enter = document.getElementById("calculate");
const Reset = document.getElementById("reset");

const bill = document.getElementById("price");
const number_of_people = document.getElementById("number_of_people");

let chosen_tip = 0;

const tip5 = document.getElementById("percent_option1");
const tip10 = document.getElementById("percent_option2");
const tip15 = document.getElementById("percent_option3");
const tip25 = document.getElementById("percent_option4");
const tip50 = document.getElementById("percent_option5");
const tipcostume = document.getElementById("custom");

// Event listeners for preset tip percentages
tip5.addEventListener("click", function() {
  chosen_tip = 0.05;
  resetclass();
  tipcostume.value = ""; // Reset custom tip input value
  tip5.classList.add("selected");
});

tip10.addEventListener("click", function() {
  chosen_tip = 0.10;
  resetclass();
  tipcostume.value = ""; // Reset custom tip input value
  tip10.classList.add("selected");
});

tip15.addEventListener("click", function() {
  chosen_tip = 0.15;
  resetclass();
  tipcostume.value = ""; // Reset custom tip input value
  tip15.classList.add("selected");
});

tip25.addEventListener("click", function() {
  chosen_tip = 0.25;
  resetclass();
  tipcostume.value = ""; // Reset custom tip input value
  tip25.classList.add("selected");
});

tip50.addEventListener("click", function() {
  chosen_tip = 0.50;
  resetclass();
  tipcostume.value = ""; // Reset custom tip input value
  tip50.classList.add("selected");
});

// Event listener for custom tip input using 'change' event
tipcostume.addEventListener("change", function() {
  chosen_tip = parseFloat(tipcostume.value) / 100;
  resetclass();
});

Enter.addEventListener("click", function() {
  const integer_people = parseInt(number_of_people.value);
  const integer_bill = parseFloat(bill.value);

  const wholeprice = document.getElementById("wholeprice");
  const wholetip = document.getElementById("wholetip");

  if (!isNaN(integer_bill) && !isNaN(integer_people) && integer_people > 0 && integer_bill > 0) {
    const tip_amount = chosen_tip * (integer_bill / integer_people);
    const total_amount = (integer_bill / integer_people) * (1 + chosen_tip);
    wholeprice.innerHTML = `$${total_amount.toFixed(2)}`; // Format total amount to two decimal places
    wholetip.innerHTML = `$${tip_amount.toFixed(2)}`; // Format tip amount to two decimal places
  } else {
    wholeprice.innerHTML = '--';
    wholetip.innerHTML = '--';
  }
});

Reset.addEventListener("click", function() {
  bill.value = "";
  number_of_people.value = "";
  document.getElementById("wholeprice").innerHTML = "--";
  document.getElementById("wholetip").innerHTML = "--";
  chosen_tip = 0;
  tipcostume.value = ""; // Reset custom tip input value
  resetclass();
});

function resetclass() {
  tip5.classList.remove("selected");
  tip10.classList.remove("selected");
  tip15.classList.remove("selected");
  tip25.classList.remove("selected");
  tip50.classList.remove("selected");
}
