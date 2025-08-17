
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

// buttons.forEach(function(button){}
buttons.forEach((button) => {


    console.log(button);
  
  button.addEventListener("click", (e) => {

    console.log(e.target);
    console.log(e.target.id);

    const color = e.target.id;

    body.style.backgroundColor = color;
  });
});
