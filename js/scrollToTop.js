const page3 = document.querySelector('#habilidades')
const scrollToTop = document.querySelector('.scrollToTop')

const observerTop = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTop.style.bottom = '3rem'
      scrollToTop.classList.add('showScrollToTop')
    } else {
      if (scrollToTop.classList.contains('showScrollToTop') && entry.boundingClientRect.y > 0) {
        scrollToTop.classList.remove('showScrollToTop')
        scrollToTop.addEventListener('transitionend', removeScrollFromView)
      }
    }
  })
})

function removeScrollFromView() {
  scrollToTop.removeEventListener('transitionend', removeScrollFromView)
  if (scrollToTop.classList.contains('showScrollToTop')) return
  scrollToTop.style.bottom = '-200px'
}

observerTop.observe(page3)

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
