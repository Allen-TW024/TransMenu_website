const dishes = [
  {
    name: "Pho Tai",
    translation: "越南生牛河粉",
    story: "北越風味，以清澈牛骨湯慢熬 8 小時，搭配羅勒與檸檬。",
  },
  {
    name: "Okonomiyaki",
    translation: "大阪燒",
    story: "多層次高麗菜、柴魚與醬汁堆疊，是最道地的庶民靈魂食物。",
  },
  {
    name: "Arepas Reina Pepiada",
    translation: "酪梨雞肉玉米餅",
    story: "委內瑞拉街頭必吃，以玉米餅包覆酪梨雞肉沙拉，口感軟糯。",
  },
  {
    name: "Tagine Zitoun",
    translation: "摩洛哥橄欖燉雞",
    story: "溫和香料與鹹香橄欖，搭配庫斯庫斯就是一餐完美北非料理。",
  },
  {
    name: "Pupusas",
    translation: "薩爾瓦多起司玉米餅",
    story: "以玉米餅包入起司與豆泥，搭配酸甜捲心菜 Curtido 一起食用。",
  },
];

const generatorBtn = document.getElementById("menu-generator");
const previewName = document.querySelector(".preview-name");
const previewTranslation = document.querySelector(".preview-translation");
const previewStory = document.querySelector(".preview-story");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (generatorBtn) {
  generatorBtn.addEventListener("click", () => {
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    previewName.textContent = randomDish.name;
    previewTranslation.textContent = randomDish.translation;
    previewStory.textContent = randomDish.story;
  });
}

const ctaForm = document.querySelector(".cta-form");
if (ctaForm) {
  ctaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = ctaForm.querySelector("input[type='email']");
    input.value = "";
    generatorBtn?.classList.add("pulse");
    setTimeout(() => generatorBtn?.classList.remove("pulse"), 1000);
    alert("感謝你的支持！我們會盡快寄出 TestFlight 邀請。");
  });
}
