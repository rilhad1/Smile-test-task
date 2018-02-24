window.onload = function start() {
    for (let j = 0; j < document.getElementsByClassName("minGalerry").length; j++) {
        document.getElementsByClassName("minGalerry")[j].onclick = function() {
            document.getElementById("expandedImg").innerHTML = this.innerHTML
        }
    document.getElementsByClassName("minGalerry")[0].click();
    }


}
$(function() {
    $(".stars-ratings").rateYo({
        onChange: function(rating, rateYoInstance) {
            $(this).next().text(rating);
        }
    });
});

$(function() {
    $(".reviewRating.stars-ratings").rateYo({
        starWidth: "40px",
    });
});


let modal1 = document.getElementById('myModal1');
let img1 = document.getElementById('video-1');
let modalImg1 = document.getElementById("img01");
function modalVideo1(){
    modal1.style.display = "block";
}
let span1 = document.getElementsByClassName("close")[0];
span1.onclick = function() { 
    modal1.style.display = "none";
}

let modal2 = document.getElementById('myModal2');
let img2 = document.getElementById('video-2');
let modalImg2 = document.getElementById("img02");
function modalVideo2(){
    modal2.style.display = "block";
}
let span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() { 
    modal2.style.display = "none";
}