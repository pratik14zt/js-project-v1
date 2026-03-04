const counterEl = document.getElementById("counter");
const messageEl = document.getElementById("message");
const stepInput = document.getElementById("stepInput");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
    counterEl.textContent = count;
}

function getStep() {
  const stepValue = parseInt(stepInput.value);

  if (isNaN(stepValue) || stepValue <= 0) {
    messageEl.textContent = "Invalid step value";
    return null;
  }

  messageEl.textContent = "";
  return stepValue;
}

incrementBtn.addEventListener("click", function () {
 const step = getStep();
  if (step === null) return;

  count = count + step;
  updateDisplay();
});


decrementBtn.addEventListener("click", function () {
  const step = getStep();
  if (step === null) return;

  // Invalid action rule
  if (count - step < 0) {
    messageEl.textContent = "Cannot go below 0";
    return;
  }

  count = count - step;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  messageEl.textContent = "Count is reset";
  updateDisplay();
});
