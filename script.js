var counter = 0;

document.getElementById("countButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").textContent = counter;
});

document.getElementById("resetButton").addEventListener("click", function() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
});

document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // スペースキーでカウントアップ
        counter++;
        document.getElementById("counter").textContent = counter;
    }
});
