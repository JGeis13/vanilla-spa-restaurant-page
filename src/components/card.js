const buildCard = ({ imgUrl, text }) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");

  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);

  const p = document.createElement("p");
  p.textContent = text;

  imgBox.append(img);

  card.append(imgBox);
  card.append(p);

  return card;
};

export default buildCard;
