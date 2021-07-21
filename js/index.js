// loader

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init(){
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    main.style.display = 'block';
    setTimeout(() => main.style.opacity = 1, 50);
  }, 1500);
}

init();


// floating button

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
  progress();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// progress bar

function progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// carousel words

var words = ['#WebDevelopment', '#GraphicDesign', '#UserInterface'];
var counter = 0;
var word = document.getElementById("carousel-words");

setInterval(update_carousel_words, 3000);

function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length){
    counter = 0;
  }
}


// filter portfolio

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}