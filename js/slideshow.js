function startSlideshow(slideshowContainer) {
  let slideIndex = 0;
  const slides = slideshowContainer.getElementsByClassName("slide");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  showSlides();
}

const slideshowContainers = document.getElementsByClassName("slideshow-container");
for (let i = 0; i < slideshowContainers.length; i++) {
  startSlideshow(slideshowContainers[i]);
}
