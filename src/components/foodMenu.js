const foodData = [
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
  {
    name: "Cheese & Crackers",
    price: 5.99,
    info: "Yummy and buttery",
  },
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
  {
    name: "Roll & Butter",
    price: 9.99,
    info: "Yummy and buttery",
  },
];

const foodItem = ({ name, price, info }) => {
  const item = document.createElement("div");
  item.classList.add("food-item");

  const containerTop = document.createElement("div");
  containerTop.classList.add("container-top");

  const nameH3 = document.createElement("h3");
  nameH3.textContent = name;

  const priceH3 = document.createElement("h3");
  priceH3.textContent = price;

  const infoP = document.createElement("p");
  infoP.textContent = info;

  containerTop.append(nameH3);
  containerTop.append(priceH3);

  item.append(containerTop);
  item.append(infoP);

  return item;
};

const buildFoodMenu = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("food-menu");

  foodData.forEach((item) => {
    const foodEl = foodItem(item);
    containerDiv.append(foodEl);
  });

  return containerDiv;
};

export default buildFoodMenu;
