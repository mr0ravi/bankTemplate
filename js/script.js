function updateHero(imgSrc, title, desc) {
  const hero = document.getElementById("mainHero");
  // تغییر تصویر با انیمیشن نرم
  hero.style.backgroundImage = `url('${imgSrc}')`;
  // بروزرسانی متن ها
  document.getElementById("heroTitle").innerText = title;
  document.getElementById("heroDesc").innerText = desc;
}

const popup = document.getElementById("servicePopup");

const popupTitle = document.getElementById("popupTitle");

const popupDescription = document.getElementById("popupDescription");

const closeButton = document.querySelector(".popup-close-btn");

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    popupTitle.textContent = card.dataset.title;

    popupDescription.textContent = card.dataset.description;

    popup.classList.add("show");

    document.body.style.overflow = "hidden";
  });
});

function hidePopup() {
  popup.classList.remove("show");

  document.body.style.overflow = "";

  popupTitle.textContent = "";

  popupDescription.textContent = "";
}

closeButton.addEventListener("click", hidePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    hidePopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("show")) {
    hidePopup();
  }
});
