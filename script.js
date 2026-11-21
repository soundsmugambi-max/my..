
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. GET HTML ELEMENTS
    // =====================================

    const loveButton = document.getElementById("loveButton");
    const message = document.getElementById("message");
    const letter = document.getElementById("letter");

    const musicButton = document.getElementById("musicButton");
    const backgroundMusic = document.getElementById("backgroundMusic");


    // =====================================
    // 2. CHECK REQUIRED ELEMENTS
    // =====================================

    if (!loveButton || !message || !letter) {
        console.error("Missing HTML elements. Check your IDs.");
        return;
    }


    // =====================================
    // 3. CREATE FLOATING HEARTS
    // =====================================

    function createHearts() {

        for (let i = 0; i < 15; i++) {

            const heart = document.createElement("span");

            heart.textContent = "❤️";
            heart.classList.add("floating-heart");

            heart.style.left = Math.random() * 95 + "vw";

            heart.style.animationDelay =
                Math.random() * 2 + "s";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 6000);

        }

    }


    // =====================================
    // 4. FIRST BUTTON - SHOW SURPRISE
    // =====================================

    loveButton.addEventListener("click", function () {

        message.classList.remove("hidden");

        message.innerHTML = `
            <p>
                🥺❤️ I don't know how to explain it,
                but you make my world a little brighter.
            </p>

            <br>

            <p>
                Thank you for being you. 💗
            </p>

            <br>

            <button id="openLetter">
                Open My Letter 💌
            </button>
        `;

        loveButton.textContent =
            "You are special to me ❤️";

        loveButton.disabled = true;

        // CREATE FLOATING HEARTS

        createHearts();


        // =================================
        // 5. SECOND BUTTON - OPEN LETTER
        // =================================

        const openLetterButton =
            document.getElementById("openLetter");

        openLetterButton.addEventListener("click", function () {

            letter.classList.remove("hidden");

            openLetterButton.textContent =
                "Letter Opened ❤️";

            openLetterButton.disabled = true;

            // CREATE MORE HEARTS

            createHearts();

            // SCROLL TO LETTER

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });


    // =====================================
    // 6. BACKGROUND MUSIC PLAYER
    // =====================================

    if (musicButton && backgroundMusic) {

        musicButton.addEventListener("click", async function () {

            if (backgroundMusic.paused) {

                try {

                    await backgroundMusic.play();

                    musicButton.textContent =
                        "⏸ Pause Our Song";

                } catch (error) {

                    console.error(
                        "Music playback failed:",
                        error
                    );

                    musicButton.textContent =
                        "Try Playing Again 🎵";

                }

            } else {

                backgroundMusic.pause();

                musicButton.textContent =
                    "▶ Play Our Song";

            }

        });

    }


    // =====================================
    // 7. MUSIC BUTTON STATUS
    // =====================================

    if (backgroundMusic && musicButton) {

        backgroundMusic.addEventListener("ended", function () {

            musicButton.textContent =
                "▶ Play Our Song";

        });

    }

    console.log("Love Reel website loaded successfully ❤️");


// =====================================
// 8. GRAND ROMANTIC FINALE
// =====================================

const finalScreenButton =
    document.getElementById("finalScreenButton");

const finalScreen =
    document.getElementById("finalScreen");

const yesButton =
    document.getElementById("yesButton");

const thinkButton =
    document.getElementById("thinkButton");

const finalResponse =
    document.getElementById("finalResponse");


// ENTER THE SEPARATE FINAL SCREEN

if (finalScreenButton && finalScreen) {

    finalScreenButton.addEventListener("click", function () {

        // HIDE THE MAIN WEBSITE CONTENT
        document.querySelector(".welcome-screen")?.classList.add("hidden");

        // SHOW THE FINAL SCREEN
        finalScreen.classList.remove("hidden");

        // CHANGE PAGE BACKGROUND BEHAVIOUR
        document.body.classList.add("final-mode");

        // SCROLL TO THE TOP
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // CREATE FLOATING HEARTS
        createHearts();

    });

}


// YES BUTTON

if (yesButton && finalResponse) {

    yesButton.addEventListener("click", function () {

        finalResponse.classList.remove("hidden");

        finalResponse.innerHTML = `
            🥺❤️ YOU JUST MADE ME THE HAPPIEST PERSON!

            <br><br>

            Thank you for giving me a chance.

            <br><br>

            I promise to cherish every moment.
            💗💗💗
        `;

        createHearts();

        yesButton.textContent = "YOU MADE MY DAY! ❤️";

        yesButton.disabled = true;

    });

}


// LET ME THINK BUTTON

if (thinkButton && finalResponse) {

    thinkButton.addEventListener("click", function () {

        finalResponse.classList.remove("hidden");

        finalResponse.innerHTML = `
            That's okay, Masounds. 🥺💗

            <br><br>

            Take all the time you need.
            Your feelings matter, and there's no pressure.

            ❤️
        `;

        createHearts();

    });

}

  });
