const track = document.querySelector(".track");
track.addEventListener("wheel", (e) => {

    if (track.classList.contains("move") && e.deltaY > 0) {
        return;
    }

    e.preventDefault();

    if (e.deltaY > 0) {
        track.classList.add("move");
    } else if (e.deltaY < 0) {
        track.classList.remove("move");
    }
}, { passive: false });