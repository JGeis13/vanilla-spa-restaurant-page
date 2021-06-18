const buildHero = (type = "heading") => {
  // add options for making smaller?

  // Could extract hero into own component
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner-container");

  if (type != "plain") {
    heroSection.classList.add("tall");

    const h1 = document.createElement("h1");
    h1.textContent = "We're Bland";

    const subText = document.createElement("p");
    subText.textContent =
      "All the good things about our restaurant go here. There are so many of them! Wow are we neat. It's pretty amazing when you really think about it.";

    innerContainer.append(h1);
    innerContainer.append(subText);
  }

  heroSection.append(innerContainer);

  return heroSection;
};

export default buildHero;
