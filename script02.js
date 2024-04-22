function calculadora() {
  return {
    display: document.querySelector(".display"),
    inicia() {
      this.cliqueBotoes();
    },
    clear() {
      this.display.value = "";
    },
    apagar() {
      this.display.value = this.display.value.slice(0, -1);
    },
    result() {
      return eval(this.display.value);
    },
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("but")) this.display.value += el.innerHTML;
        if (el.classList.contains("clear")) this.clear();
        if (el.classList.contains("apagar")) this.apagar();
        if (el.classList.contains("result")) this.display.value = this.result();
      });
    },
  };
}
const calc = calculadora();
calc.inicia();
