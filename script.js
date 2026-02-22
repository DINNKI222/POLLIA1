let userName = "";

document.getElementById("enterBtn").addEventListener("click", startChat);

function startChat() {
    userName = document.getElementById("username").value.trim();
    if(userName === "") {
        alert("Escribe tu nombre 🐤");
        return;
    }

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("chatScreen").style.display = "flex";

    addMessage("Hola " + userName + " 👑🐤\nSelecciona una categoría:");
    showMainMenu();
}

function addMessage(text) {
    const chat = document.getElementById("chat");
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerText = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

function clearOptions() {
    document.getElementById("options").innerHTML = "";
}

function addOption(text, action) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = action;
    document.getElementById("options").appendChild(btn);
}

function showMainMenu() {
    clearOptions();
    addOption("📜 Reglas", showReglas);
    addOption("🏆 Rangos", showRangos);
    addOption("📢 Eventos", showEventos);
    addOption("🛡️ Reportes", showReportes);
    addOption("🐤 Sobre", showSobre);
}

/* Aquí puedes volver a meter TODAS tus preguntas completas
   igual que antes, solo copiando las respuestas dentro
   de addMessage("texto completo..."); */

function showReglas() {
    clearOptions();
    addMessage("📜 Sección Reglas");
    addOption("¿Cuáles son las reglas?", () => {
        addMessage("Aquí van todas tus reglas completas...");
    });
    addOption("🔙 Volver", showMainMenu);
}

function showRangos() {
    clearOptions();
    addMessage("🏆 Sección Rangos");
    addOption("🔙 Volver", showMainMenu);
}

function showEventos() {
    clearOptions();
    addMessage("📢 Actividad y Eventos");
    addOption("🔙 Volver", showMainMenu);
}

function showReportes() {
    clearOptions();
    addMessage("🛡️ Reportes y Problemas");
    addOption("🔙 Volver", showMainMenu);
}

function showSobre() {
    clearOptions();
    addMessage("🐤 Sobre el Team Pollitos");
    addOption("🔙 Volver", showMainMenu);
}