const viewFull = () => {
  const button = document.getElementById("viewFull");
  const parentElement = document.getElementById("myElement");
  const newContent = document.createElement("p");
  newContent.textContent = "Проблеми?";

  parentElement.prepend(newContent);
  button.remove();
};

document.getElementById("viewFull").addEventListener("click", viewFull);

const moreFeatures = () => {
  const dl = document.getElementById("dl");
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.innerHTML = "Дизайн і архітектура";
  dd.innerHTML =
    "Створення ефективних, функціональних та естетично збалансованих рішень для розв'язання проблем та задач у певній області";
  let dt1 = document.createElement("dt");
  let dd1 = document.createElement("dd");
  dt1.innerHTML = "Ремонт та обслуговування";
  dd1.innerHTML =
    "Збереження, відновлення та підтримка функціональності та ефективності різних об'єктів, приміщень або систем";

  dl.after(dt, dd, dt1, dd1);
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Наразі це всі послуги, які надає компанія";
  document.getElementById("moreFeatures").replaceWith(newParagraph);
};

document.getElementById("moreFeatures").addEventListener("click", moreFeatures);
