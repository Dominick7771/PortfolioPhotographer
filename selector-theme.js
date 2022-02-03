let body = document.querySelector("body");
let logo = document.querySelector(".logoDark");
let contentHeader = document.querySelector(".header .content");
let hero = document.querySelector(".hero");
let textAll = document.querySelectorAll(".dark-theme");
let heroDarkThemeTitle = document.querySelector(".heroDarkThemeTitle");
let heroDarkThemeText = document.querySelector(".heroDarkThemeText");
let heroDarkThemeBtn = document.querySelector(".heroDarkThemeBtn");
let skillLabelsDark = document.querySelector(".skillLabelsDark");
let skillLabelsTextDark = document.querySelector(".skillLabelsTextDark");
let portfolioLabelsDark = document.querySelector(".portfolioLabelsDark");
let portfolioLabelsTextDark = document.querySelector(".portfolioLabelsTextDark");
let videoLabelsDark = document.querySelector(".videoLabelsDark");
let videoLabelsTextDark = document.querySelector(".videoLabelsTextDark");
let priceLabelsDark = document.querySelector(".priceLabelsDark");
let priceLabelsTextDark = document.querySelector(".priceLabelsTextDark");
let sectionDark = document.querySelectorAll(".sectionDark");
let skillsItemsDark = document.querySelector(".skillsItemsDark");
let priceCartDark = document.querySelector(".priceCartDark");
let contacts = document.querySelector(".contacts");
let formDark = document.querySelector(".formDark");
let githubDark = document.querySelector(".githubDark");
let footerContentDark = document.querySelector(".footerContentDark");
let footerIconsDark = document.querySelectorAll(".footerIconsDark");

function changeThemes() {
    if(themeSelector.classList[0] == "themeDark") {
        body.style.backgroundColor = "#fff";
        themeSelector.innerHTML = "<use href=\"./assets/svg/sprite.svg#Vector\"></use>";
        themeSelector.classList = ("themeLight");
        contentHeader.style.backgroundImage = "url(./assets/img/bg-light.jpg)";
        hero.style.backgroundImage = "url(./assets/img/bg-light.jpg)";
        document.querySelector(".language li:nth-child(2)").style.color = "#000";
        for (let i = 0; i < textAll.length; i++) {
            textAll[i].className = ("light-theme");
        }
        logo.classList = ("logoLight");
        heroDarkThemeTitle.className = ("heroLightThemeTitle");
        heroDarkThemeText.className = ("heroLightThemeText");
        heroDarkThemeBtn.className = ("heroLightThemeBtn");
        skillLabelsDark.classList = ("skillLabelsLight");
        skillLabelsTextDark.classList = ("skillLabelsTextLight");
        portfolioLabelsDark.classList = ("portfolioLabelsLight");
        portfolioLabelsTextDark.classList = ("portfolioLabelsTextLight");
        videoLabelsDark.classList = ("videoLabelsLight");
        videoLabelsTextDark.classList = ("videoLabelsTextLight");
        priceLabelsDark.classList = ("priceLabelsLight");
        priceLabelsTextDark.classList = ("priceLabelsTextLight");
        for (let i = 0; i < 6; i++) {
            sectionDark[i].classList.remove("sectionDark");
            sectionDark[i].classList.add("sectionLight");
        }
        skillsItemsDark.className = ("skillsItemsLight");
        for (let i = 0; i < 4; i++) {
            albumBtnDark.classList = ("albumBtnLight");
        }
        for (let i = 0; i < 3; i++) {
            priceCartDark.classList = ("priceCartLight");
        }
        contacts.style.backgroundImage = "url(./assets/img/contacts-light.jpg)";
        formDark.classList = ("formLight");
        footerContentDark.classList = ("footerContentLight");
        githubDark.classList = ("githubLight");
        for (let i = 0; i < 4; i++) {
            footerIconsDark[i].classList = ("footerIconsLight");
        }
    } else {
        body.style.backgroundColor = "#000";
        themeSelector.innerHTML = "<use href=\"./assets/svg/sprite.svg#carbon_sun\"></use>";
        themeSelector.classList = ("themeDark");
        contentHeader.style.backgroundImage = "url(./assets/img/bg.jpg)";
        hero.style.backgroundImage = "url(./assets/img/bg.jpg)";
        document.querySelector(".language li:nth-child(2)").style.color = "#fff"
        for (let i = 0; i < textAll.length; i++) {
            textAll[i].className = ("dark-theme");
        }
        logo.classList = ("logoDark");
        heroDarkThemeTitle.className = ("heroDarkThemeTitle");
        heroDarkThemeText.className = ("heroDarkThemeText");
        heroDarkThemeBtn.className = ("heroDarkThemeBtn");
        skillLabelsDark.classList = ("skillLabelsDark");
        skillLabelsTextDark.classList = ("skillLabelsTextDark");
        portfolioLabelsDark.classList = ("portfolioLabelsDark");
        portfolioLabelsTextDark.classList = ("portfolioLabelsTextDark");
        videoLabelsDark.classList = ("videoLabelsDark");
        videoLabelsTextDark.classList = ("videoLabelsTextDark");
        priceLabelsDark.classList = ("priceLabelsDark");
        priceLabelsTextDark.classList = ("priceLabelsTextDark");
        for (let i = 0; i < 6; i++) {
            sectionDark[i].classList.remove("sectionLight");
            sectionDark[i].classList.add("sectionDark");
        }
        skillsItemsDark.className = ("skillsItemsDark");
        for (let i = 0; i < 4; i++) {
            albumBtnDark.classList = ("albumBtnDark");
        }
        for (let i = 0; i < 3; i++) {
            priceCartDark.classList = ("priceCartDark");
        }
        contacts.style.backgroundImage = "url(./assets/img/contacts.jpg)"
        formDark.classList = ("formDark");
        footerContentDark.classList = ("footerContentDark");
        githubDark.classList = ("githubDark");
        for (let i = 0; i < 4; i++) {
            footerIconsDark[i].classList = ("footerIconsDark");
        }
    }
}