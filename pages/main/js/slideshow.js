//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex
var t
// KHai bào hàm hiển thị slide
function showSlides() {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('dot')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }

  slides[slideIndex].style.display = 'block'
  dots[slideIndex].className += ' active'
  //chuyển đến slide tiếp theo
  slideIndex++
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  //tự động chuyển đổi slide sau 5s
  // setTimeout(showSlides, 5000)
}
function showSlides1(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
//mặc định hiển thị slide đầu tiên
showSlides((slideIndex = 0))
//Ấn vào chấm sẽ đổi hình
function currentSlide(n) {
  showSlides((slideIndex = n))
}
//nút next , prev
function plusSlides(n) {
  showSlides(slideIndex + 1)
}
function plusSlides1(n) {
  showSlides1((slideIndex += n))
}
function auto() {
  t = setInterval(showSlides, 5000)
}
