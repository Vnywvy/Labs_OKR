const openAlert = () => {
  const reply = confirm("Хочете отримати інформацію про працевлаштування?");
  if (!reply) {
    alert("Бувайте");
    return;
  }

  let email = "";
  while (true) {
    email = prompt("Вкажіть свою електронну адресу");
    if (email === null) {
      alert("Бувайте");
      return;
    }

    if (email.trim() !== "") {
      alert("Ви отримаєте бажані відомості упродовж 5 хвилин");
      break;
    }
  }
};

document.getElementById("getHired").addEventListener("click", openAlert);

const showDevelopersInfo = (lastName, firstName, position = "Студент") => {
  alert(`Прізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
};

document.getElementById("infoButton").addEventListener("click", () => {
  showDevelopersInfo("Житченко", "Богдан");
});

const water = document.querySelectorAll("p.water");
let result = "<b>Водний параграф - вміст водного параграфа</b><br />";
for (let i = 0; i < water.length; i++) {
  result += `Value of ${water[i].nodeName} is ${water[i].childNodes[0].nodeValue}<br/>`;
}

document.getElementById("water-p").innerHTML = result;
