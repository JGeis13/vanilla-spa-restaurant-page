import buildFooter from "../components/footer";
import buildHeader from "../components/header";

const routes = {
  "/": "home",
  "/our-menu": "menu",
  "/contact": "contact",
};

export default function renderPage(page, pageName) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(buildHeader(pageName));
  contentDiv.append(page);
  contentDiv.append(buildFooter());
}
