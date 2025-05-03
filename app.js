const wrapper = document.querySelector(".sliderWrapper")
console.log(wrapper)

wrapper.style.transform = "translateX(100px)"

const menuItems = document.querySelectorAll(".menuItem")


//Essa condicao ForEach serve para percorrer por cada item, 
// com adicao de um evento que faz com que o usuario possa clicar em cada item 
// e assim ao cliclar, ele ira direcionar na devida pagina
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 *index}vw)`;
  });
});
