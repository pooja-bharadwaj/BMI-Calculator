const height = document.getElementById("height-value");
const weight = document.getElementById("weight-value");
const computed_value = document.getElementById("computed-value");
const btn = document.querySelector(".compute-bmi");
const condition = document.querySelector(".weight-condition");
console.log(condition);

calculateBMI();

function calculateBMI() {
  let heightInMeters = Number(height.value) / 100;
  let weight_value = Number(weight.value);
  let bmi = weight_value / (heightInMeters * heightInMeters);

  computed_value.value = bmi.toFixed(2);
  if (bmi < 18.5) {
    condition.textContent = "Under Weight";
  } else if (bmi >= 25.5) {
    condition.textContent = "Over Weight";
  } else {
    condition.textContent = "Normal Weight";
  }
}

btn.addEventListener("click", calculateBMI);
