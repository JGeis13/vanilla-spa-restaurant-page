import buildHero from "../components/hero";
import buildInfoSection from "../components/info-section";
import buildCard from "../components/card";

import FoodImage1 from "../assets/food1.jpg";
import FoodImage2 from "../assets/food2.jpg";

const buildHomePage = () => {
  const page = document.createElement("div");
  page.classList.add("page");
  page.id = "home";

  /* Hero Section (includes header) */

  const heroSection = buildHero();

  /* About us section */

  const aboutUsContent = document.createElement("div");
  aboutUsContent.classList.add("content");

  const card1 = buildCard({
    imgUrl: FoodImage1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus enim magni totam sed, at vitae rem corrupti nam labore neque. Repudiandae non, molestias voluptas voluptatibus, odit ipsa, eligendi eius nisi laborum officiis voluptate voluptatum est nostrum molestiae error velit sunt aliquam! Iste et non voluptates ipsam magni autem quis. Nam, eum autem. Ad dolorum vitae voluptate laudantium iste quis deserunt neque odio impedit repellendus, provident sunt in dolorem dolores aliquid debitis illum labore nam pariatur tenetur voluptates laboriosam eos.",
  });

  const card2 = buildCard({
    imgUrl: FoodImage2,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus enim magni totam sed, at vitae rem corrupti nam labore neque. Repudiandae non, molestias voluptas voluptatibus, odit ipsa, eligendi eius nisi laborum officiis voluptate voluptatum est nostrum molestiae error velit sunt aliquam! Iste et non voluptates ipsam magni autem quis. Nam, eum autem. Ad dolorum vitae voluptate laudantium iste quis deserunt neque odio impedit repellendus, provident sunt in dolorem dolores aliquid debitis illum labore nam pariatur tenetur voluptates laboriosam eos.",
  });

  aboutUsContent.append(card1);
  aboutUsContent.append(card2);

  const aboutUsSection = buildInfoSection({ title: "About Us", subtitle: "Our slogan might go here.", contentElement: aboutUsContent, id: "about-us" });

  /* Add elements to page */

  page.append(heroSection);
  page.append(aboutUsSection);

  return page;
};

export default buildHomePage;
