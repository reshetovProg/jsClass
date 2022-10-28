const randomButton = document.getElementsByClassName('generate')[0];
let randomNumber = document.getElementsByClassName('random-number')[0];
//box2
const boxCoord = document.getElementsByClassName('box2')[0];
let xCoord = boxCoord.getElementsByClassName('X-coord')[0];
let yCoord = boxCoord.getElementsByClassName('Y-coord')[0];
//box3
const hideBottom = document.getElementsByClassName('hide-button')[0];
const textHidden = document.getElementsByClassName('content')[0];
//box1
randomButton.addEventListener('click', function(){
    randomNumber.textContent=Math.floor(Math.random()*99);
});
//box2
boxCoord.addEventListener('mouseover', function(){
    boxCoord.addEventListener('mousemove', function(e){
        //xCoord.textContent=boxCoord.pageX;
        xCoord.textContent=e.offsetX;
        //yCoord.textContent=boxCoord.pageY;
        yCoord.textContent=e.offsetY;
    })
})
//box3
hideBottom.addEventListener('click', function(){
    textHidden.classList.toggle('hidden');
})