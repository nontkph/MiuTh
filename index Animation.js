document.addEventListener("DOMContentLoaded", () => {
    // IntersectionObserver Setup
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, {
        threshold: 0.8
    });

    // Observe all elements with class .media
    const mediaElements = document.querySelectorAll(".media");
    mediaElements.forEach(media => {
        observer.observe(media);
    });
});
