// Fungsi slide untuk galeri Vania dan Masa SMA
let currentSlide = 0;
const slider = document.getElementById("photoSlider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Modal gambar (opsional, aktifkan jika digunakan di elemen img)
function openImgModal(src, alt) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.innerText = alt;
}

function closeImgModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Tambahan: klik gambar untuk zoom (kalau ingin)
slides.forEach(slide => {
  const img = slide.querySelector("img");
  img.addEventListener("click", () => {
    openImgModal(img.src, img.alt);
  });
});
