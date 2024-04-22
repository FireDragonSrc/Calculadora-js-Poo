function calculadora() {
  return {
    display: document.querySelector(".display"),
    inicia() {
      this.cliqueBotoes();
    },
    result() {
      return eval(this.display.value);
    },
    apagar() {
      this.display.value = this.display.value.slice(0, -1);
    },
    clearDisplay() {
      this.display.value = "";
    },
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("but")) {
          this.btnDisplay(el.innerText);
        }
        if (el.classList.contains("clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("result")) {
          this.display.value = this.result();
        }
        if (el.classList.contains("apagar")) {
          this.apagar();
        }
      });
    },
    btnDisplay(val) {
      this.display.value += val;
    },
  };
}
const calc = calculadora();
calc.inicia();
