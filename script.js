function showImage(imageUrl, selectedTabLinkId) {
    var largeImage = document.getElementById("largeImage");
    largeImage.src = imageUrl;
    largeImage.style.display = "block"; 
    
    // cambioo la opacidad
    var tabContents = document.querySelectorAll(".tab__tabLink");
    tabContents.forEach(function(tabContent) {
        var tabLinkId = tabContent.id;
        var text = tabContent.querySelector(".tab__tabLink");
        if (tabLinkId !== selectedTabLinkId) {
            text.style.opacity = "0.3"; 
        } else {
            text.style.opacity = "1"; 
        }
    });
}

function hideImage() {
    var largeImage = document.getElementById("largeImage");
    largeImage.style.display = "none"; // Oculto la imagen grande
    
    // vuelvo a cambiar la opacidaad 
    var tabContents = document.querySelectorAll(".tabContent");
    tabContents.forEach(function(tabContent) {
        var text = tabContent.querySelector(".tab__tabLink");
        text.style.opacity = "1"; 
    });
}
