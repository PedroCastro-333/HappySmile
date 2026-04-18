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
    const beijo = new Audio("beijo.mp3");
    beijo.preload = "auto";

    botao.addEventListener("click", () => {
        console.log("Clicou no botão 🖱️");

        botao.style.display = "none";
        gatinho.classList.add("mostrar");

        // ✅ No ápice do GIF (~1500ms), toca só o 1º segundo do beijo
        setTimeout(() => {
            beijo.currentTime = 0;
            beijo.play();

            // Para o áudio após 1 segundo
            setTimeout(() => {
                beijo.pause();
                beijo.currentTime = 0;
            }, 900);
        }, 3000);

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