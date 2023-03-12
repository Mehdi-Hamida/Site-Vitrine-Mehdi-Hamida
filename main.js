const {scrollTop, clientHeight} = document.documentElement; // I am creating a constant from 2 of the properties of the document.documentElement object. It's called destructuring. scrollTop corresponds to the number of pixels scrolled from the top of the document. clientHeight corresponds to the height of the visible part of the client => The Viewport.

// Function to make the background of #sticky-title transparent until #presentation-section. (To avoid the gradient passing over the blobs)
const presentationSection = document.getElementById("presentation-section");
const stickyTitleBg = document.getElementById("sticky-title-bg");

window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = presentationSection.getBoundingClientRect().top; // getBoundingClientRect is an object that contains several pieces of information and we only keep the 'top' information which corresponds to the distance between the visible part of the window and the top of our element.

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed()) // Starts when #presentation-section is entirely visible
  {
    stickyTitleBg.classList.add("gradient-bg");
  }
  
  else
  {
    stickyTitleBg.classList.remove("gradient-bg");
  }
});


// Function to animate the 2 cards from #presentation-section when scrolling on this section
const leftCard = document.getElementById("left-card");
const rightCard = document.getElementById("right-card");

window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = presentationSection.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight) // Starts when #presentation-section starts to be visible
  {
    leftCard.classList.add("left-card-animation");
    rightCard.classList.add("right-card-animation");
  }
  
  else
  {
    leftCard.classList.remove("left-card-animation");
    rightCard.classList.remove("right-card-animation");
  }
});


// Function to animate the 2 cards from #presentation-section when scrolling on this section
const moreInfosSection = document.getElementById("more-infos-section");
const glassCard = document.getElementById("glass-card");

window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = moreInfosSection.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight)
  {
    glassCard.classList.add("glass-card-animations");
  }
  
  else
  {
    glassCard.classList.remove("glass-card-animations");
  }
});