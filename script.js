//selector variables
let menu = document.querySelector(".menu");
let close_menu = document.querySelector(".close_menu");
let createMenu = document.querySelector(".menu_nav");
let nav_menu = document.querySelector(".nav_menu");
let portfolioPhoto = document.querySelector(".portfolioPhoto");
let albumBtnDark = document.querySelector(".albumBtnDark");
let albumBtnLight = document.querySelector(".albumBtnLight");
let navList = document.querySelector(".language");
let themeSelector = document.querySelector(".themeDark");

addImg("autumn");

function addImg(photos) {
    let photo = [
        "./assets/img/" + `${photos}` + "/1.jpg",
        "./assets/img/" + `${photos}` + "/2.jpg",
        "./assets/img/" + `${photos}` + "/3.jpg",
        "./assets/img/" + `${photos}` + "/4.jpg",
        "./assets/img/" + `${photos}` + "/5.jpg",
        "./assets/img/" + `${photos}` + "/6.jpg",
    ];
    for (let i = 0; i < 6; i++) {
        let img = document.createElement("img");
        img.src = photo[i];
        img.alt = "portfolio-img";
        portfolioPhoto.appendChild(img);
    }
}

function iteration(first, second, count) {
    for (let i = 0; i < count; i++) {
        first[i].textContent = second[i];
    }
}

function removeClassActive() {
    let btn = document.querySelector(".active");
    btn.classList.remove("active");
}

themeSelector.addEventListener("click", changeThemes);

navList.addEventListener("click", function (event) {
    getTranslate(event.target.textContent)
});

albumBtnDark.addEventListener("click", function (event) {
    portfolioPhoto.innerHTML = "";
    removeClassActive();
    switch (event.path[0].innerText) {
        case "Winter":
            addImg("winter");
            event.path[0].classList.add("active");
            break;
        case "Зима":
            addImg("winter");
            event.path[0].classList.add("active");
            break;
        case "Spring":
            addImg("spring");
            event.path[0].classList.add("active");
            break;
        case "Весна":
            addImg("spring");
            event.path[0].classList.add("active");
            break;
        case "Summer":
            addImg("summer");
            event.path[0].classList.add("active");
            break;
        case "Лето":
            addImg("summer");
            event.path[0].classList.add("active");
            break;
        case "Autumn":
            addImg("autumn");
            event.path[0].classList.add("active");
            break;
        case "Осень":
            addImg("autumn");
            event.path[0].classList.add("active");
            break;
    }
});

menu.addEventListener("click", function () {
    createMenu.classList.remove(createMenu.classList[1]);
});

close_menu.addEventListener("click", function () {
    createMenu.classList.add("hidden");
});

nav_menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        createMenu.classList.add("hidden");
    }
});
