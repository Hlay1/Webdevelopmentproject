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
      'project-slides/project-two/Slide1.JPG',
      'project-slides/project-two/Slide2.JPG',
      'project-slides/project-two/Slide3.JPG',
      'project-slides/project-two/Slide4.JPG',
      'project-slides/project-two/Slide5.JPG',
      'project-slides/project-two/Slide6.JPG',
      'project-slides/project-two/Slide7.JPG',
      'project-slides/project-two/Slide8.JPG',
      'project-slides/project-two/Slide9.JPG',
      'project-slides/project-two/Slide10.JPG',
      'project-slides/project-two/Slide11.JPG',
      'project-slides/project-two/Slide12.JPG',
      'project-slides/project-two/Slide13.JPG',
      'project-slides/project-two/Slide14.JPG',
      'project-slides/project-two/Slide15.JPG'
    ] : [
      'project-slides/project-one/IMG_1538.webp',
      'project-slides/project-one/IMG_1649.webp',
      'project-slides/project-one/IMG_1712.webp',
      'project-slides/project-one/IMG_1753.webp',
      'project-slides/project-one/IMG_1891.webp',
      'project-slides/project-one/IMG_1892.webp',
      'project-slides/project-one/IMG_1893.webp',
      'project-slides/project-one/IMG_1894.webp',
      'project-slides/project-one/IMG_1925.webp',
      'project-slides/project-one/IMG_1943.webp',
      'project-slides/project-one/IMG_1944.webp',
      'project-slides/project-one/IMG_1946.webp',
      'project-slides/project-one/IMG_1947.webp',
      'project-slides/project-one/IMG_1984.webp',
      'project-slides/project-one/IMG_2051.webp'
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