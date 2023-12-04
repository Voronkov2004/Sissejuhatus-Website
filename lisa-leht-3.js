let image = document.getElementById('pilt1');
// sisse suumimine
function ZoomIn() {
    // saab pildi suuruse
    let width = image.clientWidth;
    let height = image.clientHeight;
    // muudab 50 piksli väärtuses
    image.style.width = (width + 50) + "px";
    image.style.height = (height + 50) + "px";
}
// välja suumimine
function ZoomOut() {
    //saab pildi suuruse
    let width = image.clientWidth;
    let height = image.clientHeight;
    // muudab 50 piksli väärtuses
    image.style.width = (width - 50) + "px";
    image.style.height = (height - 50) + "px";
}
