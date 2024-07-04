const slides = document.querySelectorAll(".slide");
 var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${ index*100}%`
    }
)
 const goPrev=()=>{
    counter--
    slideImage()
 }
 const goNext=()=>{
    
    counter++
    slideImage()
 }

 const slideImage = () =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translatex(-${counter*100}%)`
        }
    )
    if (counter >= slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translatex(-${counter * 100}%)`;
    });
 }

