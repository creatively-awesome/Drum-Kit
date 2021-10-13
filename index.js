var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        playSound(key);

    });

    document.addEventListener("keydown", function (event) {
        playSound(event.key);
    });

}

function playSound(key) {
    var audio;
    var rightButton = true;

    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;

        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;

        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;

        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        default:
            console.log(buttonName);
            rightButton = false;
            break;
    }

    if (rightButton) {
        buttonAnimation(key);
        audio.play();
    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

