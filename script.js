const counterElement=document.getElementById('counter');
const decreaseButton=document.getElementById('decrease');
const resetButton=document.getElementById('reset');
const increaseButton=document.getElementById('increase');

let counter=0;

function updateCounter(){
counterElement.textContent=counter;
counterElement.style.transform='scale(1.2)';
setTimeout(()=>{
    counterElement.style.transform='scale(1)';

},200)   
}

decreaseButton.addEventListener('click',()=>{
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
  });

  increaseButton.addEventListener('click', () => {
    counter++;
    updateCounter();
  });