// Funktsioon toggleSectionVisibility
function toggleSectionVisibility() {
    // Hangime elemendi ID-ga 'additional-info'
    var section = document.getElementById('additional-info');

    // Kontrollime, kas elemendi nähtavus on 'none' või tühi ('')
    if (section.style.display === 'none' || section.style.display === '') {
        // Kui nii, muudame nähtavuse 'block'-ks, tehes elemendi nähtavaks
        section.style.display = 'block';
    } else {
        // Kui nähtavus ei ole 'none', muudame nähtavuse 'none'-ks, tehes elemendi nähtamatuks
        section.style.display = 'none';
    }
}