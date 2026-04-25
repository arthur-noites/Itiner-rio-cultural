document.getElementById("formCadastro").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;

    const usuario = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value
    };

    if (form.senha.value !== form.confirmarSenha.value) {
        alert("Senhas não coincidem!");
        return;
    }

    try {
        const response = await fetch("http://localhost:8082/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.text();
        alert(data);

    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar");
    }
});