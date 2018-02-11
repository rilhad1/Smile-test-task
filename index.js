window.onload = function starRating() {
    let rating = document.getElementsByClassName("stars-ratings");
    for (let i = 0; i < rating.length; i++) {
        rating[i].innerHTML = document.getElementById("star-rating").innerHTML
    }
    let block = document.getElementsByClassName("block-color");
    let tovar = document.getElementById("tovarRepeat").innerHTML
    for (let q = 0; q < block.length; q++) {
        block[q].innerHTML = tovar
    }
}
