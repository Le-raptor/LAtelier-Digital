  //envoie de commande
  
  document.getElementById('date-field').value = new Date().toLocaleString(); // Initialiser EmailJS 
emailjs.init("ByKihsIRufwigMdYM"); 
// Remplace par ta clé publique EmailJS 
const form = document.getElementById('contact-form'); 
const statusMessage = document.createElement('div'); 
statusMessage.id = 'status-message'; statusMessage.style.marginTop = '10px'; 
statusMessage.style.fontWeight = '600'; form.appendChild(statusMessage); 
form.addEventListener('submit', function(e) { e.preventDefault(); 
  // Afficher message "en cours..."
 statusMessage.style.display = 'block';

 statusMessage.style.color = '#38bdf8';

 statusMessage.textContent = "Envoi en cours...";
 emailjs.sendForm('service_u88n9re', 'template_jy5fptu', this) .then(() => { 
  statusMessage.style.color = '#38bdf8'; statusMessage.textContent = "Email envoyé avec succès ! Merci 😊"; 
  form.reset(); setTimeout(() => { statusMessage.style.display = 'none'; }, 3000);
   }, (error) => { statusMessage.style.color = 'red';
    statusMessage.textContent = "Une erreur est survenue lors de l'envoi."; 
    console.error("Erreur EmailJS :", error); setTimeout(() => { statusMessage.style.display = 'none'; }, 4000); 
    });
     });
      // Gérer les onglets
     const tabs = document.querySelectorAll('.tab-button');
      const contents = document.querySelectorAll('.tab-content');
       tabs.forEach(tab => { tab.addEventListener('click', () => { 
        const target = tab.dataset.tab; tabs.forEach(t => t.classList.remove('active')); 
        tab.classList.add('active'); contents.forEach(c => { c.id === target ? c.classList.add('active') : c.classList.remove('active');

         });
          }); 
          }); 
          