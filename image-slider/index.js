const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel");
image = document.querySelectorAll(".img"),
buttons = document.querySelectorAll(".button");

let imageindex = 1,
intervalid;

const autoslide = ()=>{
    intervalid = setInterval(() => slideimage(++imageindex),2000);
};

autoslide();

const slideimage = ()=>{
    imageindex = imageindex === image.length ? 0 : imageindex < 0 ? images.length - 1 : imageindex;
    carousel.style.transform = `translate(-${imageindex * 100}%)`;
};

const updateclick = (e) =>{
    clearInterval(intervalid);
    imageindex += e.target.id === "next" ? 1 : -1;
   slideimage(imageindex);
   autoslide();
}

buttons.forEach((button) => button.addEventListener("click",updateclick));

wrapper.addEventListener("mouseover",()=> clearInterval(intervalid) );
wrapper.addEventListener("mouseleave",autoslide);