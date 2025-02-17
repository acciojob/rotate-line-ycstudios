document.addEventListener("DOMContentLoaded", function() {
    const line = document.getElementById('line');
    let angle = 0;

    function rotation() {
        angle += 2; // Increment angle by 2 degrees
        line.style.transform = `rotate(${angle}deg)`; // Apply rotation
    }

    setInterval(rotation, 20); // Rotate every 20ms
});
