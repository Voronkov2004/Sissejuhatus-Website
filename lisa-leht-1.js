// Funktsioon toggleSectionVisibility
function toggleSectionVisibility() {
    // Hangime elemendi ID-ga 'additional-info'
   var section = document.getElementById('additional-info');
   
   // Kui elemendi stiil on 'none' või tühi (''), tee see nähtavaks ('block')
   if (section.style.display === 'none' || section.style.display === '') {
       section.style.display = 'block';
   } else {
       // Kui elemendi stiil ei ole 'none', tee see nähtamatuks ('none')
       section.style.display = 'none';
   }
}

// Seda tegi chat.gpt