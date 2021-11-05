// menu
const burger = document.querySelector('#burger')

burger.onclick = () => {
  navbar.classList.toggle('show')
}

// scroll-smoth
const tabs = document.querySelectorAll('.tab')
const pages = document.querySelectorAll('.page')

const observerScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(entry.target)
        const index = Array.from(pages).indexOf(entry.target)
        tabs.forEach(tab => {
          tab.classList.remove('activeTab')
        })
        tabs[index].classList.add('activeTab')
      }
    })
  },
  {
    threshold: 0.25,
  }
)

pages.forEach(page => {
  observerScroll.observe(page)
})
