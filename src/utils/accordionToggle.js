document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.accordion-card');
      const content = card.querySelector('.accordion-content');
      const toggle = card.querySelector('.accordion-toggle');
      
      content.classList.toggle('hidden');
      toggle.textContent = content.classList.contains('hidden') ? '+' : '-';
    });
  });
  