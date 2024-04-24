import { backToFormButton, form } from "./constantes.js";
import {
  addUserToTable,
  hideForm,
  hideUsersTable,
  showForm,
  showUsersTable,
} from "./functions.js";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (name === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("Por favor, insira um nome válido sem números.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  addUserToTable(name, email);

  nameInput.value = "";
  emailInput.value = "";

  showUsersTable();
  hideForm();
  backToFormButton.removeAttribute("hidden");
});

backToFormButton.addEventListener("click", function () {
  showForm();
  hideUsersTable();
  backToFormButton.setAttribute("hidden", "");
});
