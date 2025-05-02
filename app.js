const wrapper = document.querySelector(".sliderWrapper")
console.log(wrapper)

wrapper.style.transform = "translateX(100px)"

const menuItems = document.querySelectorAll(".menuItem")


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



//Essa condicao ForEach serve para percorrer por cada item, 
// com adicao de um evento que faz com que o usuario possa clicar em cada item 
// e assim ao cliclar, ele ira direcionar na devida pagina
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 *index}vw)`;

    //change the choosen poduct
    choosenProduct = products [index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;


    //assign new colors
    currentProductColors.forEach((color, index)=> {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//Funcao para mudar de cor do produto a cada click no botao de cores
currentProductColors.forEach((color, index)=>{
  color.addEventListener("click", () =>{
    currentProductImg.src = choosenProduct.colors[index].img
  });
});


//Funcao pra mudar de cor a cada click no botao de tamanho
currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", () =>{
    currentProductSizes.forEach((size)=>{
    size.style.backgroundColor = "white"
    size.style.color = "black"
    });

    size.style.backgroundColor = "black"
    size.style.color = "white"
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener ("click",()=>{
  payment.style.display="flex"
});


close.addEventListener ("click", ()=>{
  payment.style.display="none"
});