// Open the lightbox and display the clicked image
function openLightbox(img) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex"; // Show the lightbox
  lightboxImg.src = img.src; // Set the image source
}

// Close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
