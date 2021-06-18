const buildForm = () => {
  const form = document.createElement("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
  });

  const nameInp = document.createElement("input");
  nameInp.setAttribute("placeholder", "Full Name");
  nameInp.setAttribute("required", true);

  const emailInp = document.createElement("input");
  emailInp.setAttribute("placeholder", "Email Address");
  emailInp.setAttribute("required", true);

  const subjectInp = document.createElement("input");
  subjectInp.setAttribute("placeholder", "Subject");
  subjectInp.setAttribute("required", true);

  const textArea = document.createElement("textArea");
  textArea.setAttribute("placeholder", "Message");
  textArea.setAttribute("required", true);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Send Message";

  form.append(nameInp);
  form.append(emailInp);
  form.append(subjectInp);
  form.append(textArea);
  form.append(submitBtn);

  return form;
};

export default buildForm;
