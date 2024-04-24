import { containerForm, usersTableContainer } from "./constantes.js";

export async function addUserToTable(name, email) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
    `;
  document.getElementById("usersList").appendChild(newRow);

  // Chamar a API para adicionar o usuário
  try {
    const response = await fetch(`http://localhost:3000/pessoas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar usuário.');
    }
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error.message);
  }
}


export function showUsersTable() {
  usersTableContainer.removeAttribute("hidden");
}

export function hideUsersTable() {
  usersTableContainer.setAttribute("hidden", true);
}

export function hideForm() {
  containerForm.setAttribute("hidden", true);
}

export function showForm() {
  containerForm.removeAttribute("hidden");
}
