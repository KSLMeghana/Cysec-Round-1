function toggleLayout() {
    var featureSection = document.getElementById("feature");
    featureSection.classList.toggle("grid-layout");
}
const heartButton = document.getElementById("heart-button");
const heartIcon = document.getElementById("heart-icon");
const problem = document.querySelector(".problem");

document.addEventListener("DOMContentLoaded", function () {
    const heartButton = document.getElementById("heart-button");
    const hiddenGrid = document.querySelector(".problem .grid");

    heartButton.addEventListener("click", function () {
        hiddenGrid.classList.toggle("hidden");
    });
});
