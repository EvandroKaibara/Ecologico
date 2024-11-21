const preBtn = document.querySelector('.pre-btn');
const nxtBtn = document.querySelector('.nxt-btn');
const posts = document.querySelector('.posts');
const cardWidth = document.querySelector('.post--card').offsetWidth;

let currentScroll = 0;
preBtn.addEventListener('click', () => {
    currentScroll -= cardWidth * 4; 
    if (currentScroll < 0) currentScroll = 3;
    posts.style.transform = `translateX(-${currentScroll}px)`;
});

nxtBtn.addEventListener('click', () => {
    const maxScroll = posts.scrollWidth - posts.offsetWidth;
    currentScroll += cardWidth * 3; 
    if (currentScroll > maxScroll) currentScroll = maxScroll;
    posts.style.transform = `translateX(-${currentScroll}px)`;
});