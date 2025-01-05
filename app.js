document.addEventListener("DOMContentLoaded", function() {
    const typewriterElements = document.querySelectorAll('.left');

    typewriterElements.forEach((element) => {
        const text = element.getAttribute('data-text');
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust typing speed here (in milliseconds)
            } else {
                element.classList.remove('border-right'); // Stops cursor after typing
            }
        }

        element.innerHTML = ""; // Clear existing content
        typeWriter();
    });
});
