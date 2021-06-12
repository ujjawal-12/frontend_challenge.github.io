(() => {
  const btn = document.getElementById("hamburger");
  const ulist = document.getElementsByTagName("ul")[0];
  const img = document.querySelector("button#hamburger img");
  btn.addEventListener("click", action);
  function action() {
    if (ulist.classList.contains("nav-item")) {
      ulist.classList.toggle("nav-item");
      img.src = "./images/icon-hamburger.svg";
    } else {
      ulist.classList.toggle("nav-item");
      img.src = "./images/icon-close.svg";
    }
  }
})();
