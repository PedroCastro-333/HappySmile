document.addEventListener("DOMContentLoaded", () => {
    console.log("JS carregado ✅");

    const botao = document.getElementById("botao");
    const gatinho = document.getElementById("gatinho");
    const final = document.getElementById("final");

    if (!botao) {
        console.error("Botão não encontrado ❌");
        return;
    }

    // Pré-carrega o áudio
    const beijo = new Audio("Som_de_beijo_-_Blob_Sound__128k_.mp3");
    beijo.preload = "auto";

    // ✅ Notificação Telegram
    function notificarTelegram() {
        const token = "8762429630:AAEgNlAZUPs9ZuCGUtC0m4uFI6H1M7FupSo";
        const chatId = "8390291155";
        const agora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const mensagem = `💘 Ela clicou! \n🕐 ${agora}`;

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: mensagem })
        }).then(() => console.log("Telegram notificado ✅"))
          .catch(err => console.error("Erro Telegram:", err));
    }

    botao.addEventListener("click", () => {
        console.log("Clicou no botão 🖱️");

        notificarTelegram();

        botao.style.display = "none";
        gatinho.classList.add("mostrar");

        // No ápice do GIF (~1500ms), toca só o 1º segundo do beijo
        setTimeout(() => {
            beijo.currentTime = 0;
            beijo.play();

            setTimeout(() => {
                beijo.pause();
                beijo.currentTime = 0;
            }, 1000);
        }, 1500);

        // Começa animação de saída
        setTimeout(() => {
            gatinho.classList.add("zoomOut");
        }, 2800);

        // Mostra tela final
        setTimeout(() => {
            gatinho.style.display = "none";
            final.classList.add("mostrar");
        }, 4500);
    });
});
