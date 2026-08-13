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
      'Project%20two%20images%20(2)/Slide1.JPG',
      'Project%20two%20images%20(2)/Slide2.JPG',
      'Project%20two%20images%20(2)/Slide3.JPG',
      'Project%20two%20images%20(2)/Slide4.JPG',
      'Project%20two%20images%20(2)/Slide5.JPG',
      'Project%20two%20images%20(2)/Slide6.JPG',
      'Project%20two%20images%20(2)/Slide7.JPG',
      'Project%20two%20images%20(2)/Slide8.JPG',
      'Project%20two%20images%20(2)/Slide9.JPG',
      'Project%20two%20images%20(2)/Slide10.JPG',
      'Project%20two%20images%20(2)/Slide11.JPG',
      'Project%20two%20images%20(2)/Slide12.JPG',
      'Project%20two%20images%20(2)/Slide13.JPG',
      'Project%20two%20images%20(2)/Slide14.JPG',
      'Project%20two%20images%20(2)/Slide15.JPG'
    ] : [
      'Project%20one%20images/IMG_1538.webp',
      'Project%20one%20images/IMG_1649.webp',
      'Project%20one%20images/IMG_1712.webp',
      'Project%20one%20images/IMG_1753.webp',
      'Project%20one%20images/IMG_1891.webp',
      'Project%20one%20images/IMG_1892.webp',
      'Project%20one%20images/IMG_1893.webp',
      'Project%20one%20images/IMG_1894.webp',
      'Project%20one%20images/IMG_1925.webp',
      'Project%20one%20images/IMG_1943.webp',
      'Project%20one%20images/IMG_1944.webp',
      'Project%20one%20images/IMG_1946.webp',
      'Project%20one%20images/IMG_1947.webp',
      'Project%20one%20images/IMG_1984.webp',
      'Project%20one%20images/IMG_2051.webp'
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