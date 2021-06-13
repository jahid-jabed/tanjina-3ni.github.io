/*
 *
 * 
 */

var socialtags = [{
    img: "img/github_icon.svg",
    link: "https://github.com/tanjina-3ni"
}, {
    img: "img/linkedin_icon.svg",
    link: "https://www.linkedin.com/in/tanjina-3ni/"
}, {
    img: "img/codeforces_icon.svg",
    link: "https://codeforces.com/profile/TanjinaRahman"
}, {
    img: "img/leetcode_icon.svg",
    link: "https://leetcode.com/tanjina-3ni/"
}, {
    img: "img/youtube_icon.svg",
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

var downloadtags = [{
    img: "img/blog_icon.svg",
    link: "blog/index.html"
}, {
	img: "img/cv_icon.svg",
    link: "resume/tanjina-rahman.pdf"
}]

function loadDownloadIcons() {
    var downloadtext = ""
    for (x in downloadtags) {
        var data = `<a class="center" href="` + downloadtags[x].link + `" target=_blank> <img class="center" style="padding: 5px!important;width: 75px;" src="` + downloadtags[x].img + `"></a>`
        downloadtext += data
    }
    document.getElementById("download-list").innerHTML = downloadtext;
}

loadDownloadIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "dark") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'dark');
    }

}


function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "dark") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()





