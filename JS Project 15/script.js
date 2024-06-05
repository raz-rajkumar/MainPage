const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++;
  change()

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  // setBgToBody()
  change()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--;
  change()

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  change()
  setActiveSlide()
})
function change()
{
    const random="#"+Math.floor(Math.random()*10000000).toString(16);
    const random2="#"+Math.floor(Math.random()*10000000).toString(16);
    document.body.style.background=`linear-gradient(${random},${random2})`
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}
