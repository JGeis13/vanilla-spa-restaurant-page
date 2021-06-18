import "./style.css";

// import buildHomePage from "./pages/home";
import buildContactPage from "./pages/contact";
import renderPage from "./functions/navigation";

(() => {
  renderPage(buildContactPage(), "contact");
})();
