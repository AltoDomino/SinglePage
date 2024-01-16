export const Main = (changepage: (newPage: "main" | "shop") => void) => {
    const welcome = document.querySelector(".slider") as HTMLElement
    const description = ["('hello!')", "('I'm Dominik')", "('I'm Photographer')", "('I'm Junior Developer')"];
    let display: string[] = [];
    let i = 0;
    let j = 0;
    let isDelete = false;
  
    const Typingtext = () => {
      welcome.innerHTML = display.join('');
      if (i < description.length) {
        if (!isDelete && j <= description[i].length) {
          display.push(description[i][j]);
          j++;
        } else if (isDelete && j > 0) {
          display.pop();
          j--;
        }
  
        if ((isDelete && j === 0) || j === description[i].length) {
          isDelete = !isDelete;
          i = isDelete ? i : i + 1;
        }
      }
      setTimeout(Typingtext, 200);
    };
    Typingtext();
  
    let slideIndex = 1;
  
    const plusSlides = (anyslide: number) => showSlides(slideIndex += anyslide);
    const currentSlide = (anyslide: number) => showSlides(slideIndex = anyslide);
  
    const showSlides = (anyslide: number) => {
      const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
  
      slideIndex = anyslide > slides.length ? 1 : anyslide < 1 ? slides.length : anyslide;
  
      for (const slide of slides) {
        slide.style.display = "none";
      }
      for (const dot of dots) {
        dot.classList.remove("active");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    };
  
    showSlides(slideIndex);
    
    const button =document.createElement("button")
    button.innerHTML = "go to shop"
    button.onclick = () => changepage("shop")
  };

// export const Main = (changepage: (newPage: "shop" | "main") => void) => {
//   const square = document.createElement("div")
//   square.appendChild
//   const description = ["('hello!')", "('I'm Dominik')", "('I'm Photographer')", "('I'm Junior Developer')"];
//     let display: string[] = [];
//     let i = 0;
//     let j = 0;
//     let isDelete = false;
  
//   const button =document.createElement("button")
//   button.innerHTML = "go to main"
//   button.onclick = () => changepage("main")
//   return square
// }