const model = {
    counter: 0,
    message: "",
    infoVisible: true
};

const view = {
    elements: {},

    init() {
        this.elements.nameInput = document.getElementById("nameInput");
        this.elements.saludarBtn = document.getElementById("saludarBtn");
        this.elements.messageInput = document.getElementById("messageInput");
        this.elements.messageBtn = document.getElementById("messageBtn");
        this.elements.messageText = document.getElementById("messageText");
        this.elements.counterValue = document.getElementById("counterValue");
        this.elements.incrementBtn = document.getElementById("incrementBtn");
        this.elements.decrementBtn = document.getElementById("decrementBtn");
        this.elements.resetBtn = document.getElementById("resetBtn");
        this.elements.infoBlock = document.getElementById("infoBlock");
        this.elements.showBtn = document.getElementById("showBtn");
        this.elements.hideBtn = document.getElementById("hideBtn");
    },

    updateCounter() {
        this.elements.counterValue.textContent = model.counter;
    },

    updateMessage() {
        this.elements.messageText.textContent = model.message;
    },

    toggleInfo(visible) {
        this.elements.infoBlock.classList.toggle("hidden", !visible);
    }
};

const controller = {
    init() {
        view.init();

        view.elements.saludarBtn.addEventListener("click", () => this.saludar());
        view.elements.messageBtn.addEventListener("click", () => this.mostrarMensaje());
        view.elements.incrementBtn.addEventListener("click", () => this.incrementar());
        view.elements.decrementBtn.addEventListener("click", () => this.decrementar());
        view.elements.resetBtn.addEventListener("click", () => this.reiniciar());
        view.elements.showBtn.addEventListener("click", () => this.mostrarInfo());
        view.elements.hideBtn.addEventListener("click", () => this.ocultarInfo());

        view.updateCounter();
        view.updateMessage();
        view.toggleInfo(model.infoVisible);
    },

    saludar() {
        const name = view.elements.nameInput.value.trim();

        if (!name) {
            alert("Por favor, ingrese su nombre.");
            return;
        }

        alert(`Bienvenido: ${name}`);
    },

    mostrarMensaje() {
        const text = view.elements.messageInput.value.trim();

        if (!text) {
            alert("Debe ingresar un mensaje.");
            return;
        }

        model.message = text;
        view.updateMessage();
        view.elements.messageInput.value = "";
    },

    incrementar() {
        model.counter += 1;
        view.updateCounter();
    },

    decrementar() {
        model.counter -= 1;
        view.updateCounter();
    },

    reiniciar() {
        model.counter = 0;
        view.updateCounter();
    },

    mostrarInfo() {
        model.infoVisible = true;
        view.toggleInfo(model.infoVisible);
    },

    ocultarInfo() {
        model.infoVisible = false;
        view.toggleInfo(model.infoVisible);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    controller.init();
});