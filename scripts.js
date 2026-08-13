/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

document.addEventListener('DOMContentLoaded', () => {
  const slideshowImages = document.querySelectorAll('.project-card-image');

  slideshowImages.forEach((slideshowImage) => {
    const project = slideshowImage.dataset.project;
    const images = project === 'project-two' ? [
      'Slide1.JPG',
      'Slide2.JPG',
      'Slide3.JPG',
      'Slide4.JPG',
      'Slide5.JPG',
      'Slide6.JPG',
      'Slide7.JPG',
      'Slide8.JPG',
      'Slide9.JPG',
      'Slide10.JPG',
      'Slide11.JPG',
      'Slide12.JPG',
      'Slide13.JPG',
      'Slide14.JPG',
      'Slide15.JPG'
    ] : [
      'IMG_1538.webp',
      'IMG_1649.webp',
      'IMG_1712.webp',
      'IMG_1753.webp',
      'IMG_1891.webp',
      'IMG_1892.webp',
      'IMG_1893.webp',
      'IMG_1894.webp',
      'IMG_1925.webp',
      'IMG_1943.webp',
      'IMG_1944.webp',
      'IMG_1946.webp',
      'IMG_1947.webp',
      'IMG_1984.webp',
      'IMG_2051.webp'
    ];

    let currentIndex = 0;

    const showNextImage = () => {
      slideshowImage.style.opacity = '0';

      setTimeout(() => {
        slideshowImage.src = images[currentIndex];
        slideshowImage.alt = `${project === 'project-two' ? 'Pickup Truck' : 'Frankencycle'} project image ${currentIndex + 1}`;
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImage.style.opacity = '1';
      }, 400);
    };

    showNextImage();
    setInterval(showNextImage, 4000);
  });
});