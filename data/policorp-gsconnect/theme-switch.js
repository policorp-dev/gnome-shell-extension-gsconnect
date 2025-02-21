    document.addEventListener("DOMContentLoaded", function() {
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body;
        localStorage.clear();
        // Verificar se o tema escuro já foi ativado anteriormente
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
        }

        themeToggle.addEventListener("click", function() {
            body.classList.toggle("dark-mode");

            // Salvar estado no localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    });

