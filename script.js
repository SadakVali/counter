const counterDisplay = document.querySelector(".counter_display");

const increase = () => {
    let counterValue = parseInt(counterDisplay.textContent);
    counterValue += 1;
    counterDisplay.textContent = counterValue;
};

const decrease = () => {
    let counterValue = parseInt(counterDisplay.textContent);
    counterValue -= 1;
    counterDisplay.textContent = counterValue;
};
