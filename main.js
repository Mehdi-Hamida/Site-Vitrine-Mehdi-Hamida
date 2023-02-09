const presentationSection = document.getElementById("presentation-section");

const stickyTitleBG = document.getElementById("sticky-title-bg");

const {scrollTop, clientHeight} = document.documentElement; // I am creating a constant from 2 of the properties of the document.documentElement object. It's called destructuring. scrollTop corresponds to the number of pixels scrolled from the top of the document. clientHeight corresponds to the height of the visible part of the client => The Viewport.

// Function to make the background of "Mehdi HAMIDA" visible only from #presentation-section in order to avoid the gradient background passing over the blobs when scrolling between landing-section and presentation-section
window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = presentationSection.getBoundingClientRect().top; // getBoundingClientRect is an object that contains several pieces of information and we only keep the 'top' information which corresponds to the distance between the visible part of the window and the top of our element.
  
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.05) // Launches from 5vh over #presentation-section
  {
    stickyTitleBG.style.background = "-webkit-linear-gradient(270deg, rgba(20,20,20,1) 0%, rgba(255,255,255,0) 100%)";
  }
  
  else
  {
    stickyTitleBG.style.background = "none";
  }
});