import renderPage from "../functions/navigation";

import buildHomePage from "../pages/home";
import buildMenuPage from "../pages/menu";
import buildContactPage from "../pages/contact";

const pageBuilders = {
  home: buildHomePage,
  menu: buildMenuPage,
  contact: buildContactPage,
};

const buildHeader = (activePage) => {
  const header = document.createElement("header");
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("inner-container");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  logoDiv.textContent = "BLAND";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navItems = ["home", "menu", "contact"];

  for (let item of navItems) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    if (activePage == item) {
      a.classList.add("active");
    }

    a.addEventListener("click", () => {
      renderPage(pageBuilders[item](), item);
    });

    a.textContent = item;
    li.append(a);
    ul.append(li);
  }

  nav.append(ul);
  containerDiv.append(logoDiv);
  containerDiv.append(nav);
  header.append(containerDiv);

  return header;
};

export default buildHeader;
