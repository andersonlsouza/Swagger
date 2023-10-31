import { generalRequest } from "./utils/generalRequest.js";

const form = document.querySelector("#form");
const nameUser = document.querySelector("#name-input");
const emailUser = document.querySelector("#e-mail-input");
const table = document.querySelector("tbody");
const button = document.querySelector("#register");

let userId;

reqGet();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formBody = {
        name: form.name.value,
        email: form.email.value
    }

    if (button.value === "Cadastrar") {
        await userAdd(formBody);
    }

    if (button.value === "Editar") {
        userEdit(formBody, userId);

        form.name.value = '';
        form.email.value = '';

        button.value = "Cadastrar";
    }

    reqGet();
});

async function reqGet() {
    const data = await generalRequest('/user');

    renderTable(data);
}

async function userAdd(formBody) {
    await generalRequest('/user', 'POST', formBody);
}

async function userEdit(formBody, userId) {
    await generalRequest(`/user/${userId}`, 'PATCH', formBody);
}

async function userDelete(id) {
    await generalRequest(`/user/${id}`, 'DELETE');

    reqGet();
}

function user(obj) {
    button.value = "Editar";
    userId = obj.id;
    nameUser.value = obj.name;
    emailUser.value = obj.email;
}

function renderTable(array) {
    table.innerHTML =
        `   
        <tr id="table-heading">
            <td class="id-number">#ID</td>
            <td class="name">name</td>
            <td class="e-mail">E-MAIL</td>
            <td class="editar">EDITAR</td>
            <td class="excluir">EXCLUIR</td>
        </tr>
    `;

    for (let i = 0; i < array.length; i++) {

        let line = document.createElement("tr");

        let column1 = document.createElement("td");
        let column2 = document.createElement("td");
        let column3 = document.createElement("td");
        let column4 = document.createElement("td");
        let column5 = document.createElement("td");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerHTML = `<td class="id-number">${i + 1}</td>`;
        column2.innerHTML = `<td class="name">${array[i].name}</td>`;
        column3.innerHTML = `<td class="e-mail">${array[i].email}</td>`;
        column4.innerHTML = `<img src="./images/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="./images/excluir.png" alt="Ícone de excluir">`;

        column4.addEventListener("click", () => user(array[i]));
        column5.addEventListener("click", () => userDelete(array[i].id));

        table.appendChild(line);
    }
}