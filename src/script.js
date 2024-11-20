const posts = [...document.querySelector('posts')];
const nxtBtn = [...document,querySelectorAll('.nxt-btn')];
const preBtn = [...document,querySelectorAll('.pre-btn')];

posts.forEach((item,i)=>{
    let dimensions = item.getBoundingClientRect();
    let containerWidth =  dimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})