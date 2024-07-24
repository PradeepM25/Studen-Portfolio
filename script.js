function moreAboutMe() {
    let txt = document.getElementById("moreAboutMe");
    let div = document.getElementById("addInfo");
    if(div.style.display === "none") {
        div.style.display = "block";
        txt.innerHTML = "Less About Me";
    }
    else {
        div.style.display = "none";
        txt.innerHTML = "More About Me";
    }
}