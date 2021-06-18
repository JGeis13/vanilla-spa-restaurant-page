import buildHero from "../components/hero";
import buildInfoSection from "../components/info-section";
import buildFoodMenu from "../components/foodMenu";

const buildMenuPage = () => {
  const page = document.createElement("div");
  page.classList.add("page");
  page.id = "menu";

  /* Hero Section (includes header) */

  const heroSection = buildHero("plain");

  /* Menu section */

  const menuContent = buildFoodMenu();
  menuContent.classList.add("content");

  const menuSection = buildInfoSection({
    title: "Our Menu",
    subtitle: "It's got to be the best darn food you ever did eat.",
    contentElement: menuContent,
    id: "our-menu",
  });

  /* Add elements to page */

  page.append(heroSection);
  page.append(menuSection);

  return page;
};

export default buildMenuPage;
