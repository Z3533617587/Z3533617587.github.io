const navbar = document.querySelector('.navbar');
let timer;

window.addEventListener('mousemove', () => {
    if (navbar.style.top === '-50px') {
        navbar.style.top = '0'; // 显示导航栏
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        navbar.style.top = '-50px'; // 隐藏导航栏
    }, 3000); // 3秒后隐藏导航栏
});

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}


