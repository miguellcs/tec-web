
console.log("JS carregou");
const form = document.getElementById("loginForm");

if (form) {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const erroEmail = document.getElementById("erroEmail");
  const erroSenha = document.getElementById("erroSenha");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    erroEmail.textContent = "";
    erroSenha.textContent = "";

    let valido = true;
if (email.value.trim() === "") {
  erroEmail.textContent = "O campo de email é obrigatório.";
  valido = false;
}

if (senha.value.trim() === "") {
  erroSenha.textContent = "O campo de senha é obrigatório.";
  valido = false;
}

    if (valido) {
      window.location.href = "/index.html";
    }
  });
}