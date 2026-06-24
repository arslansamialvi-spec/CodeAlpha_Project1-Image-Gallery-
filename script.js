const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;
        lightbox.style.display="flex";
        lightboxImg.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length)
    {
        currentIndex=0;
    }

    lightboxImg.src=galleryImages[currentIndex].src;

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0)
    {
        currentIndex=galleryImages.length-1;
    }

    lightboxImg.src=galleryImages[currentIndex].src;

});

function filterImages(category)
{
    const items=document.querySelectorAll(".gallery-item");

    items.forEach(item=>{

        if(category==="all" || item.classList.contains(category))
        {
            item.style.display="block";
        }
        else
        {
            item.style.display="none";
        }

    });
}