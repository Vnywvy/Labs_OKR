const changeColor = () => {
  document.getElementById("changeColor").style.backgroundColor = "blue";
  setTimeout(() => {
    document.getElementById("changeColor").style.backgroundColor = "";
  }, 30000);
};

document.getElementById("toggleColor").addEventListener("click", changeColor);

const goToHomePage = () => {
  location.assign("index.html");
};

document.getElementById("toHome").addEventListener("click", goToHomePage);
