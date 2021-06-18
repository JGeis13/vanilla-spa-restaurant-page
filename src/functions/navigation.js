import buildFooter from "../components/footer";
import buildHeader from "../components/header";

export default function renderPage(page, pageName) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(buildHeader(pageName));
  contentDiv.append(page);
  contentDiv.append(buildFooter());
}
