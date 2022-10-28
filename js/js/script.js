const randomButton = document.getElementsByClassName('generate')[0];
let randomNumber = document.getElementsByClassName('random-number')[0];
//box2
const boxCoord = document.getElementsByClassName('box2')[0];
let xCoord = boxCoord.getElementsByClassName('X-coord')[0];
let yCoord = boxCoord.getElementsByClassName('Y-coord')[0];
//box3
const hideBottom = document.getElementsByClassName('hide-button')[0];
const textHidden = document.getElementsByClassName('content')[0];
//box4
const htmlButton = document.getElementsByClassName('html-button')[0];
const cssButton = document.getElementsByClassName('css-button')[0];
const jsButton = document.getElementsByClassName('js-button')[0];
const htmlContent = document.getElementsByClassName('html-content')[0];
const cssContent = document.getElementsByClassName('css-content')[0];
const jsContent = document.getElementsByClassName('js-content')[0];
//box5
const boxBig = document.getElementsByClassName("box__big")[0];
const boxSmall = document.getElementsByClassName('box__small');

//box1
randomButton.addEventListener('click', function () {
    randomNumber.textContent = Math.floor(Math.random() * 99);
});
//box2

boxCoord.addEventListener('mousemove', function () {
    //xCoord.textContent=boxCoord.pageX;
    xCoord.textContent = Event.offsetX;
    //yCoord.textContent=boxCoord.pageY;
    yCoord.textContent = Event.offsetY;
});

//box3
hideBottom.addEventListener('click', function () {
    textHidden.classList.toggle('hidden');
});
//box4
htmlButton.addEventListener('click', function () {
    htmlButton.classList.add('active');
    cssButton.classList.remove('active');
    jsButton.classList.remove('active');
    htmlContent.classList.add('active');
    cssContent.classList.remove('active');
    jsContent.classList.remove('active');
});
cssButton.addEventListener('click', function () {
    cssButton.classList.add('active');
    htmlButton.classList.remove('active');
    jsButton.classList.remove('active');
    cssContent.classList.add('active');
    htmlContent.classList.remove('active');
    jsContent.classList.remove('active');
});
jsButton.addEventListener('click', function () {
    jsButton.classList.add('active');
    cssButton.classList.remove('active');
    htmlButton.classList.remove('active');
    jsContent.classList.add('active');
    cssContent.classList.remove('active');
    htmlContent.classList.remove('active');
});
//box5

for (let el of boxSmall) {
    el.addEventListener('click', function () {
        let curentEl = el.classList[1];
        //console.log(curentEl);
        boxBig.classList.remove(boxBig.classList[1]);
        boxBig.classList.add(curentEl);
    })
}