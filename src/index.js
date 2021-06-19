import "./style.css";

import buildHomePage from "./pages/home";
import renderPage from "./functions/navigation";

(() => {
  renderPage(buildHomePage(), "home");
})();
