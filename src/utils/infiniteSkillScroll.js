document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.skills-container');
    const originalCards = Array.from(document.querySelectorAll('.skill-card'));

    // Clone original cards for a seamless loop
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    // Calculate the total width of the original set (including gaps)
    let totalWidth = originalCards.reduce((acc, card) => {
      const style = getComputedStyle(card);
      return acc + card.offsetWidth + parseInt(style.marginRight);
    }, 0);

    // Use a continuously increasing scroll variable
    let scrollX = 0;
    const scrollSpeed = 1; // Adjust speed: pixels per frame

    function scrollLoop() {
      scrollX += scrollSpeed;
      // Use modulo to continuously loop the scroll position
      scrollX = scrollX % totalWidth;
      container.style.transform = `translateX(-${scrollX}px)`;
      requestAnimationFrame(scrollLoop);
    }

    scrollLoop();
  });