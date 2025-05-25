 const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Désactive tout
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(tab => {
        tab.classList.remove('active', 'fade-slide-in');
      });

      // Active le bon
      button.classList.add('active');
      const targetTab = document.getElementById(button.dataset.tab);
      targetTab.classList.add('active');

      // Animation (relance propre)
      setTimeout(() => {
        targetTab.classList.add('fade-slide-in');
      }, 10);
    });
  });


