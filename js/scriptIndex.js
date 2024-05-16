const compareStrings = () => {
  const string1 = document.getElementById("string1").value;
  const string2 = document.getElementById("string2").value;
  if (string1.length > string2.length) {
    alert("Перший рядок більший");
  } else if (string1.length < string2.length) {
    alert("Другий рядок більший");
  } else {
    alert("Рядки рівні");
  }
};

document
  .getElementById("compareStrings")
  .addEventListener("click", compareStrings);

const comments = [
  `<div id="comment"><h3>Геннадій Петренко</h3><p>Приємні співробітники, робота була виконана за вказаний термін без косяків.</p></div>`,
  `<div id="comment"><h3>Олександра Іванова</h3><p>Чудовий сервіс! Дуже задоволена результатом.</p></div>`,
  `<div id="comment"><h3>Дмитро Коваль</h3><p>Великий професіоналізм та відповідальність. Рекомендую!</p></div>`,
  `<div id="comment"><h3>Марія Сидоренко</h3><p>Робота була виконана якісно, але трохи запізнилися з термінами.</p></div>`,
  `<div id="comment"><h3>Віктор Мельник</h3><p>Прекрасний досвід! Буду звертатися ще.</p></div>`,
  `<div id="comment"><h3>Анна Ткаченко</h3><p>Дуже вдячна за швидку та якісну роботу.</p></div>`,
  `<div id="comment"><h3>Ігор Гончаренко</h3><p>Все було зроблено на найвищому рівні. Дякую!</p></div>`,
];

let commentsIndex = 0;

const nextComment = () => {
  if (commentsIndex < 6) {
    commentsIndex++;
  } else {
    commentsIndex = 0;
  }
  document.getElementById("comment").outerHTML = comments[commentsIndex];
};

document.getElementById("nextComment").addEventListener("click", nextComment);

const openDetails = () => {
  document.write(
    `<h1>This page is not supported yet<h1><a href="index.html">Повернутися до Головної</a>`
  );
};

document.getElementById("openDetails").addEventListener("click", openDetails);

const footerLinks = [
  { href: "index.html", title: "Головна" },
  { href: "services.html", title: "Послуги" },
  { href: "contacts.html", title: "Контакти" },
  { href: "aboutUs.html", title: "Проекти компанії" },
];

const createFooterLink = (linkData) => {
  const linkElement = document.createElement("a");
  linkElement.href = linkData.href;
  linkElement.textContent = linkData.title;
  return linkElement;
};

const openFooter = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.innerHTML = "";
    const footerList = document.createElement("ul");
    footerList.classList.add("styled-ul");
    footerLinks.forEach((linkData) => {
      const linkElement = createFooterLink(linkData);
      const listItem = document.createElement("li");
      listItem.appendChild(linkElement);
      footerList.appendChild(listItem);
    });
    footerElement.appendChild(footerList);
  } else {
    console.error("Element with ID 'openFooter' not found.");
  }
};

document.getElementById("openFooter").addEventListener("click", openFooter);

const changesYes = () => {
  document.getElementById("changes").innerHTML = "";
  document
    .getElementById("changes")
    .append(
      document.createTextNode(
        "Тоді переходьте за посиланням контакти вгорі сторінки"
      )
    );
};

document.getElementById("changesYes").addEventListener("click", changesYes);

const changesNo = () => {
  document.getElementById("changes").innerHTML = "";
  document
    .getElementById("changes")
    .append(
      document.createTextNode("Тоді ще раз перегляньте результати нашої роботи")
    );
};

document.getElementById("changesNo").addEventListener("click", changesNo);
