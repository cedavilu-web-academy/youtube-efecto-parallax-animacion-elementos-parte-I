let image1 = document.getElementById('image1');
let title = document.querySelector('.title');
window.addEventListener('scroll', function(){
    let initialPoint = window.scrollY;
    //console.log(initialPoint);
    image1.style.left = -initialPoint * 0.5 + 'px';
    title.style.top = initialPoint * 0.5 +'px';
})

