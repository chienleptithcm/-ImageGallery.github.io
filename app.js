var imgs = document.querySelectorAll('.img_item img');
var left = document.querySelector('.control__left');
var right = document.querySelector('.control__right');
var close = document.querySelector('.fa-xmark');
var gallery = document.querySelector('.gallery');
var gallery_img = document.querySelector('.gallery__inner img');


var current = 0;

function show_gallery()
{
    if(current == imgs.length-1)
    {
        right.classList.add('hide');
    }
    else
    {
        right.classList.remove('hide');
    }
    if(current == 0)
    {
        left.classList.add('hide');
    }
    else{
        left.classList.remove('hide');
    }
    gallery.classList.add("show");
    gallery_img.src = imgs[current].src;
}

imgs.forEach((item,index)=>{
    item.addEventListener('click',function()
    {
        current = index;
        show_gallery();
    })
})

left.addEventListener("click",()=>{
    if(current!=0)
    {
        current--;
        show_gallery();
    }
})

right.addEventListener('click',()=>{
    if(current < imgs.length-1)
    {
        current++;
        show_gallery();
    }
})

close.addEventListener('click',()=>{
    gallery.classList.remove('show');
})


