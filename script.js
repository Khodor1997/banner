let cards = document.querySelectorAll(".product-item");
let btn = document.querySelector(".btn");
const allLang = ["en", "ru", "nl", "fr", "es", "zh", "ja"];


cards.forEach((e) => {
  e.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });

    e.classList.add("active");

    let link = "https://google.com/";

    if (e.classList.contains("monthly")) {
      link = "https://apple.com/";
    }

    btn.setAttribute("href", link);
  });
});

function changeLanguage() {
  const params = new URLSearchParams(window.location.search);

  let lang = params.get("lang");

  if (allLang.includes(lang)) {
    for (let key in langArr) {
      document.querySelector(".lng-" + key).innerHTML = langArr[key][lang];
    }

    return;
  }

  window.location.search = `?lang=${navigator.language.substring(0, 2)}`;
}

changeLanguage();
