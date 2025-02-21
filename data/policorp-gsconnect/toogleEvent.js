        let toggle = document.getElementById("toggleSwitch");
        let statusText = document.getElementById("status");
        let toggleImage = document.getElementById("toggleImage");

        toggle.addEventListener("change", function() {
            let state = toggle.checked ? "ON" : "OFF";
            statusText.textContent = "Clique para abrir a extensão:";

            if (toggle.checked) {
                toggleImage.classList.add("active");

            } else {
                toggleImage.classList.remove("active");
            }

            // Enviar mensagem para o handler externo (se aplicável)
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.external) {
                window.webkit.messageHandlers.external.postMessage(state);
            }
        });
        
        
        toggleImage.addEventListener("click", function() {
            if  (toggle.checked) {  // Só faz a animação se o switch estiver ativado
                window.webkit.messageHandlers.external.postMessage("image_clicked");

            }
        });