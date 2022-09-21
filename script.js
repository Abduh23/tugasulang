function terserah() {
    let kevin = document.querySelector('.skills-content-text')
    let content_kevin = kevin.getBoundingClientRect().top
    let screen_position = window.innerHeight /2
    if(content_kevin < screen_position) {
        kevin.classList.add('skills-content-text-show')
    }
}
window.addEventListener("scroll", terserah)