window.addEventListener("load", () => {
    const sounds = document.querySelectorAll("audio");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    console.log(sounds);

    const colors =[ 
        "#b5eb5a",
        "#242ce9",
        "#f56d65",
        "#bb6315",
        "#c494be",
        "#f1a90e"
    ]

    pads.forEach((pads, index) => {
        pads.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    const createBubble = index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation =`jump 1s ease-in-out`;
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
})