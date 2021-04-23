/*
 *
 * 
 */

var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/tanjina-3ni"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/tanjina-3ni/"
}, {
    img: "img/codeforces.svg",
    link: "https://codeforces.com/profile/TanjinaRahman"
}, {
    img: "img/youtube.svg",
    link: "https://www.youtube.com/c/TanjinaRahman"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `" target=_blank> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
