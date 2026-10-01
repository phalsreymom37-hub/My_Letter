function openLetter() {
    document.getElementById("opening").style.display = "none";

    document.getElementById("letterSection").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function chooseBack() {
    document.getElementById("answer").textContent =
        "Thank you for giving us another chance, bbe. I really appreciate it, and I hope we can make things better together. 🤍";
}

function chooseTime() {
    document.getElementById("answer").textContent =
        "Are you sure, bbe? Have you really thought about it? I just want to make sure this is what you truly want. 🤍";
}
