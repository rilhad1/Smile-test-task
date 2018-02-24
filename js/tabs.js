let visibl1 = true

function showAll1() {

    let el = document.getElementById("chart1");
    let arr = document.getElementById("arrowDownRotate1");

    if (visibl1) {
        el.classList.add("hideThis");
        arr.classList.add("upRotate");
        visibl1 = false
    }
    else {
        el.classList.remove("hideThis");
        arr.classList.remove("upRotate");
        visibl1 = true
    }
}

let visibl2 = true

function showAll2() {

    let el = document.getElementById("descr");
    let arr = document.getElementById("arrowDownRotate2");

    if (visibl2) {
        el.classList.add("hideThis");
        arr.classList.add("upRotate");
        visibl2 = false
    }
    else {
        el.classList.remove("hideThis");
        arr.classList.remove("upRotate");
        visibl2 = true
    }
}

let visibl3 = true

function showAll3() {

    let el = document.getElementById("hideReview");
    let arr = document.getElementById("arrowDownRotate3");

    if (visibl3) {
        el.classList.add("hideThis");
        arr.classList.add("upRotate");
        visibl3 = false
    }
    else {
        el.classList.remove("hideThis");
        arr.classList.remove("upRotate");
        visibl3 = true
    }
}


function openTab(pageName, elmnt) {
    let i, tabcontent, tablinks, tabVis;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("activeList");
    }
    elmnt.classList.add("activeList");
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();

function openTabInTab(pageName, elmnt) {
    let i, tabcontent, tablinks, tabVis;
    tabcontent = document.getElementsByClassName("contentTabInTab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("linkOnTabInTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("activeList");
    }
    elmnt.classList.add("activeList");
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen1").click();

function openTabBuyTogether(pageName, elmnt) {
    let i, tabcontent, tablinks, tabVis;
    tabcontent = document.getElementsByClassName("tabBuyTogether");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("buyTogether");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("activeListBuyTogether");
    }
    elmnt.classList.add("activeListBuyTogether");
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen2").click();