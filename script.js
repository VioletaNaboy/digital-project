//gallery
const gallery = document.getElementById('gallery');
const galleryBtn = document.getElementById('btn-gallery');

let numbers = [];

for (let i = 1; i <= 8; i++) {
    numbers.push(i);
}
const addElements = (startEl, endEl) => {
let markup = numbers
    .map((number) => {
        if (number === 1 && number >= startEl) {
            return `<div class="image-container">
 <div class="overlay">
        <h2 class="overlay-title">ДОСУГОВИЙ <br/>
ЦЕНТР</h2>
<a href="http://"
              target="_blank"
              rel="noopener noreferrer" class="see-more-btn">
            Детальніше
            <svg width="32" height="15">
              <use href="./src/img/sprite.svg#icon-arrow-right"></use>
            </svg>
          </a>
    </div>
    <img
              src="./src/img/projects/photo${number}.jpg"
              srcset="
                ./src/img/projects/photo${number}.jpg    1x,
                ./src/img/projects/photo${number}@2x.jpg 2x
              "
              alt="Modern building"
              height="225"
            />
            </div>`;
        }
        if (number >= startEl && number <= endEl) {
            return `<img
              src="./src/img/projects/photo${number}.jpg"
              srcset="
                ./src/img/projects/photo${number}.jpg    1x,
                ./src/img/projects/photo${number}@2x.jpg 2x
              "
              alt="Modern building"
              height="225"
            />`;
        }
    })
        .join("");
    gallery.innerHTML += markup;
}

addElements(1, 5);


galleryBtn.addEventListener('click', () => {
    if (numbers.length > gallery.children.length) {
          addElements(gallery.children.length + 1, numbers.length )
    }
    if (numbers.length === gallery.children.length) {
            galleryBtn.style.display = 'none';
        }
})

//slider
const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const slides = document.querySelectorAll(".slide");
      const slideNumberElement = document.getElementById("slideNumber");
      let currentIndex = 0;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
        });
         slideNumberElement.textContent = (index + 1).toString().padStart(2, '0');
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }

      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
    