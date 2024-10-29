document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");

    // Đảm bảo slideIndex không vượt quá hoặc nhỏ hơn 1
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Loại bỏ lớp "active" từ tất cả các dot
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    // Hiển thị slide hiện tại và thêm lớp "active" vào dot tương ứng
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  setInterval(function() {
    plusSlides(1);
  }, 5000);
});