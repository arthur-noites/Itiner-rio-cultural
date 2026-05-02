document.getElementById("formLogin").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;

    const dados = {
        email: form.email.value,
        senha: form.senha.value
    };

    try {
        const response = await fetch("http://localhost:8082/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert("Login realizado com sucesso!");
            window.location.href = "base.html";
        } else {
            alert("Email ou senha inválidos");
        }

    } catch (error) {
        console.error(error);
        alert("Erro no login");
    }
});