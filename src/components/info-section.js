const buildInfoSection = ({ title, subtitle, contentElement, id }) => {
  const infoSection = document.createElement("section");
  infoSection.id = id;
  infoSection.classList.add("info-section");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner-container");

  const titleBox = document.createElement("div");
  titleBox.classList.add("title-box");

  const titleH1 = document.createElement("h1");
  titleH1.textContent = title;

  const subtitleH5 = document.createElement("h5");
  subtitleH5.textContent = subtitle;

  titleBox.append(titleH1);
  titleBox.append(subtitleH5);

  innerContainer.append(titleBox);
  innerContainer.append(contentElement);

  infoSection.append(innerContainer);

  return infoSection;
};

export default buildInfoSection;
