let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
body = document.getElementById('gradient');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
 
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// function copyArrayAndManipulate(array, instructions){
//     const output= [];
//     for (let i=0; i<array.length; i++) {
//         output.push(instructions(array[i]));   
//     }
//     return output;
// }
// function multiplyBy2(input){ 
//     return input*2;
//  }
//  const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);