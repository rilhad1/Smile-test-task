let width = 257;
let count = 1;
let arrows = document.getElementById('arrows')
let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

arrows.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

arrows.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};


let widthArticle = 745;
let arrowsArticle = document.getElementById('articleArrow')
let carouselArticle = document.getElementById('carousel1');
let listArticle = carouselArticle.querySelector('ul');
let listElemsArticle = carouselArticle.querySelectorAll('li');


arrowsArticle.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthArticle * count, 0)
    listArticle.style.marginLeft = position + 'px';
};

arrowsArticle.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthArticle * count, -widthArticle * (listElemsArticle.length - count));
    listArticle.style.marginLeft = position + 'px';
};



let widthTogether = 254.6;
let arrowsTogether1 = document.getElementById('arrowsTogether1')
let carouselTogether1 = document.getElementById('carousel2');
let listTogether1 = carouselTogether1.querySelector('ul');
let listElemsTogether1 = carouselTogether1.querySelectorAll('li');


arrowsTogether1.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthTogether * count, 0)
    listTogether1.style.marginLeft = position + 'px';
};

arrowsTogether1.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthTogether * count, -widthTogether * (listElemsTogether1.length - count));
    listTogether1.style.marginLeft = position + 'px';
};


let arrowsTogether2 = document.getElementById('arrowsTogether2')
let carouselTogether2 = document.getElementById('carousel3');
let listTogether2 = carouselTogether2.querySelector('ul');
let listElemsTogether2 = carouselTogether2.querySelectorAll('li');


arrowsTogether2.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthTogether * count, 0)
    listTogether2.style.marginLeft = position + 'px';
};

arrowsTogether2.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthTogether * count, -widthTogether * (listElemsTogether2.length - count));
    listTogether2.style.marginLeft = position + 'px';
};




let arrowsTogether3 = document.getElementById('arrowsTogether3')
let carouselTogether3 = document.getElementById('carousel4');
let listTogether3 = carouselTogether3.querySelector('ul');
let listElemsTogether3 = carouselTogether3.querySelectorAll('li');


arrowsTogether3.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthTogether * count, 0)
    listTogether3.style.marginLeft = position + 'px';
};

arrowsTogether3.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthTogether * count, -widthTogether * (listElemsTogether3.length - count));
    listTogether3.style.marginLeft = position + 'px';
};




let arrowsTogether4 = document.getElementById('arrowsTogether4')
let carouselTogether4 = document.getElementById('carousel5');
let listTogether4 = carouselTogether4.querySelector('ul');
let listElemsTogether4 = carouselTogether4.querySelectorAll('li');


arrowsTogether4.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthTogether * count, 0)
    listTogether4.style.marginLeft = position + 'px';
};

arrowsTogether4.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthTogether * count, -widthTogether * (listElemsTogether4.length - count));
    listTogether4.style.marginLeft = position + 'px';
};



let arrowsTogether5 = document.getElementById('arrowsTogether5')
let carouselTogether5 = document.getElementById('carousel6');
let listTogether5 = carouselTogether5.querySelector('ul');
let listElemsTogether5 = carouselTogether5.querySelectorAll('li');


arrowsTogether5.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthTogether * count, 0)
    listTogether5.style.marginLeft = position + 'px';
};

arrowsTogether5.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthTogether * count, -widthTogether * (listElemsTogether5.length - count));
    listTogether5.style.marginLeft = position + 'px';
};


let widthYouWatched = 236;
let arrowYouWatched = document.getElementById('arrowYouWatched')
let carouselYouWatched = document.getElementById('carousel7');
let listYouWatched = carouselYouWatched.querySelector('ul');
let listElemsYouWatched = carouselYouWatched.querySelectorAll('li');


arrowYouWatched.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + widthYouWatched * count, 0)
    listYouWatched.style.marginLeft = position + 'px';
};

arrowYouWatched.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - widthYouWatched * count, -widthYouWatched * (listElemsYouWatched.length - count));
    listYouWatched.style.marginLeft = position + 'px';
};



let arrowSelected = document.getElementById('arrowSelected')
let carouselSelected = document.getElementById('carouselSelected');
let listSelected = carouselSelected.querySelector('ul');
let listElemsSelected = carouselSelected.querySelectorAll('li');


arrowSelected.querySelector('.arrPrev').onclick = function() {
    position = Math.min(position + width * count, 0)
    listSelected.style.marginLeft = position + 'px';
};

arrowSelected.querySelector('.arrNext').onclick = function() {
    position = Math.max(position - width * count, -width * (listElemsSelected.length - count));
    listSelected.style.marginLeft = position + 'px';
};