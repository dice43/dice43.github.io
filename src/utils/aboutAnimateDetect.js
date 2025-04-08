const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;
      
      // Check if the element is in the viewport
      if (entry.isIntersecting) {
        // Fade in and slide in when the element comes into view
        el.classList.remove('opacity-0');
        
        if (el.dataset.animate === 'fade-left') {
          el.classList.remove('-translate-x-full');
          el.classList.add('translate-x-0');
        } else if (el.dataset.animate === 'fade-right') {
          el.classList.remove('translate-x-full');
          el.classList.add('translate-x-0');
        } else if (el.dataset.animate === 'fade-back') {
          el.classList.remove('scale-75');
          el.classList.add('scale-100');
        }
      } else {
        // Fade out and slide back to the edge when the element goes out of view
        el.classList.add('opacity-0');
        
        if (el.dataset.animate === 'fade-left') {
          el.classList.add('-translate-x-full');
          el.classList.remove('translate-x-0');
        } else if (el.dataset.animate === 'fade-right') {
          el.classList.add('translate-x-full');
          el.classList.remove('translate-x-0');
        } else if (el.dataset.animate === 'fade-back') {
          el.classList.add('scale-75');
          el.classList.remove('scale-100');
        }
      }
    });
  }, {
    root: null,         // Observe relative to the viewport
    rootMargin: '0px',  // No margin around the root
    threshold: 0.1      // Trigger when 10% of the element is in the viewport
  });
  
  // Observe each element with the 'data-animate' attribute
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  