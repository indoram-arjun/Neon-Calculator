let result = document.getElementById("result");
let buttons = document.querySelectorAll(".box-child");

// --- Button Click Event ---
buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleInput(btn.textContent));
});

// --- Keyboard Input ---
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const activeBtn = [...buttons].find(b => b.textContent === key || (key === '*' && b.textContent === 'x'));
  
  if (activeBtn) {
    activeBtn.classList.add("active");
    setTimeout(() => activeBtn.classList.remove("active"), 150);
  }

  if (/^[0-9+\-*/.%]$/.test(key)) {
    result.value += key;
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    result.value = result.value.slice(0, -1);
  } else if (key === "Delete") {
    result.value = "";
  }
});

// --- Handle Button Click ---
function handleInput(value) {
  if (value === "C" || value === "AC") {
    result.value = "";
  } else if (value === "Del") {
    result.value = result.value.slice(0, -1);
  } else if (value === "=") {
    calculate();
  } else if (value === "x") {
    result.value += "*";
  } else {
    result.value += value;
  }
}

// --- Calculate Function ---
function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}
