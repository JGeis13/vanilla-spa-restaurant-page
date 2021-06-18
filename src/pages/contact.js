import buildForm from "../components/form";
import buildHero from "../components/hero";
import buildInfoSection from "../components/info-section";

const contactInfo = () => {
  const data = {
    address: "100 E. Fake Street, Cityville, CA, 90210",
    phone: "(555) 555-5555",
    email: "support@notreal.com",
  };

  const div = document.createElement("div");
  div.classList.add("contact-info");

  const h4 = document.createElement("h4");
  h4.textContent = "Contact Info";

  const ul = document.createElement("ul");

  for (let item in data) {
    const li = document.createElement("li");
    li.textContent = data[item];
    ul.append(li);
  }

  div.append(h4);
  div.append(ul);

  return div;
};

const buildContactPage = () => {
  const page = document.createElement("div");
  page.classList.add("page");
  page.id = "home";

  /* Hero Section (includes header) */

  const heroSection = buildHero("plain");

  /* About us section */

  const contactContent = document.createElement("div");
  contactContent.classList.add("content");

  const form = buildForm();

  contactContent.append(contactInfo());
  contactContent.append(form);

  const contactSection = buildInfoSection({
    title: "Get In Touch",
    subtitle: "Don't be shy. We want to hear from you!",
    contentElement: contactContent,
    id: "contact",
  });

  /* Add elements to page */

  page.append(heroSection);
  page.append(contactSection);

  return page;
};

export default buildContactPage;
