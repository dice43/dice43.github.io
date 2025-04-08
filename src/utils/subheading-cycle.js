document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll("#text-container span");
    let currentIndex = 0;
  
    // Get the screen width to adjust the animation duration for responsiveness
    const screenWidth = window.innerWidth;
    let animationDuration = screenWidth <= 768 ? 3 : 4; // Faster for small screens
  
    // Function to apply the animation to the current span
    function applyAnimation(span, delay) {
      span.classList.remove("opacity-0");
      span.classList.add("opacity-100");
      span.style.animation = `drop-in-out ${animationDuration}s ease-in-out ${delay}s forwards`;
    }
  
    // Function to remove the animation from the span
    function removeAnimation(span) {
      span.classList.remove("opacity-100");
      span.classList.add("opacity-0");
      span.style.animation = ''; // Remove any inline styles after animation ends
    }
  
    // Function to cycle through spans
    function cycleText() {
      // Reset all spans to be hidden
      spans.forEach((span) => {
        removeAnimation(span);
      });
  
      // Apply animation to the current span
      applyAnimation(spans[currentIndex], 0);
  
      // Move to the next span index
      currentIndex = (currentIndex + 1) % spans.length;
    }
  
    // Initial cycle of text
    cycleText();
    setInterval(cycleText, animationDuration * 1000); // Update every animation cycle
  });