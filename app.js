document.addEventListener("DOMContentLoaded", function () {
    const gifContainer = document.getElementById("gifContainer");
    const descriptionText = document.getElementById("descriptionText");
    const confirmButton = document.getElementById("confirmButton");
    const denyButton = document.getElementById("denyButton");
    const message = document.getElementById("message");

    // Lista de GIFs
    const GIFS = [
        {
            id: 1,
            description: "No",
            img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
        },
        {
            id: 2,
            description: "Piénsalo de nuevo.",
            img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif",
        },
        {
            id: 3,
            description: "Vamos, atrévete a decir que sí.",
            img: "https://33.media.tumblr.com/tumblr_m7unk7g9U01r2ambmo1_500.gif",
        },
        {
            id: 4,
            description: "No tengas miedo, será genial.",
            img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif",
        },
        {
            id: 5,
            description: "Confía en mí, será divertido.",
            img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif",
        },
        {
            id: 6,
            description: "No tengas dudas, te hará sonreír.",
            img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif",
        },
        {
            id: 7,
            description: "Te prometo que será inolvidable.",
            img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif",
        },
        {
            id: 8,
            description: "No dejes que el miedo te detenga.",
            img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
        },
        {
            id: 9,
            description: "Confía en el destino, nos está dando una señal.",
            img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif",
        },
        {
            id: 10,
            description: "Confía en mí.",
            img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
        },
        {
            id: 11,
            description: "No te arrepentirás.",
            img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif",
        },
    ];

    // GIF de aceptación
    const ACCEPTED_GIF = {
        id: 1,
        description: "¡Sí!",
        img: "https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif",
    };

    // Función para mostrar el GIF de aceptación
    function showAcceptedGif() {
        gifContainer.innerHTML = `<img src="${ACCEPTED_GIF.img}" alt="${ACCEPTED_GIF.description}" />`;
        descriptionText.textContent = ACCEPTED_GIF.description;  // Descripción del GIF aceptado
        confirmButton.style.display = "none";  // Ocultar el botón "Sí"
        denyButton.style.display = "none";  // Ocultar el botón "No"
        message.classList.remove("hidden");  // Mostrar el mensaje final
    }

    // Función para mover el botón "No" aleatoriamente
    function moveDenyButton() {
        const buttonWidth = denyButton.offsetWidth;
        const buttonHeight = denyButton.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        denyButton.style.position = "fixed";
        denyButton.style.left = `${x}px`;
        denyButton.style.top = `${y}px`;
    }

    // Función para actualizar el botón "No" con un GIF aleatorio
    function updateDenyButton() {
        const randomIndex = Math.floor(Math.random() * GIFS.length);
        const randomGif = GIFS[randomIndex];

        gifContainer.innerHTML = `<img src="${randomGif.img}" alt="${randomGif.description}" />`;
        descriptionText.textContent = randomGif.description;  // Actualiza la descripción

        denyButton.innerHTML = `<img src="${randomGif.img}" alt="${randomGif.description}" />`; // Actualiza la imagen del botón
        denyButton.setAttribute('aria-label', randomGif.description); // Actualiza la descripción accesible
        denyButton.title = randomGif.description; // Actualiza el texto emergente
        denyButton.textContent = randomGif.description; // Actualiza la descripción visible en el botón

        moveDenyButton();
    }

    // Asignar eventos a los botones
    confirmButton.addEventListener("click", showAcceptedGif);
    denyButton.addEventListener("click", updateDenyButton);
    denyButton.addEventListener("click", moveDenyButton);

    // Mostrar el primer GIF al cargar la página
    const initialGif = GIFS[0];
    gifContainer.innerHTML = `<img src="${initialGif.img}" alt="${initialGif.description}" />`;
    descriptionText.textContent = initialGif.description;  // Muestra la descripción inicial
});
