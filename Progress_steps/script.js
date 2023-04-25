const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("previous-btn");

let currentStep = 1;

nextBtn.addEventListener("click", function() {
  if (currentStep < steps.length) {
    steps[currentStep - 1].classList.remove("active");
    lines[currentStep - 1].classList.remove("active");
    currentStep++;
    steps[currentStep - 1].classList.add("active");
    lines[currentStep - 2].classList.add("active");
  }
  if (currentStep === steps.length) {
    nextBtn.disabled = true;
  }
  prevBtn.disabled = false;
});

prevBtn.addEventListener("click", function() {
  if (currentStep > 1) {
    steps[currentStep - 1].classList.remove("active");
    lines[currentStep - 2].classList.remove("active");
    currentStep--;
    steps[currentStep - 1].classList.add("active");
    lines[currentStep - 1].classList.add("active");
  }
  if (currentStep === 1) {
    prevBtn.disabled = true;
  }
  nextBtn.disabled = false;
});
