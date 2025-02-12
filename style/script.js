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

