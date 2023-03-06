const {scrollTop, clientHeight} = document.documentElement; // I am creating a constant from 2 of the properties of the document.documentElement object. It's called destructuring. scrollTop corresponds to the number of pixels scrolled from the top of the document. clientHeight corresponds to the height of the visible part of the client => The Viewport.


// Function to disable negative margin-top when scrolling below #landing-section
const stickyTitleBg = document.getElementById("sticky-title-bg");

window.addEventListener("scroll", () =>
{
  stickyTitleBg.style.marginTop = "0";
});


// Function to animate the 2 cards from #presentation-section when scrolling on this section
const presentationSection = document.getElementById("presentation-section");
const leftCard = document.getElementById("left-card");
const rightCard = document.getElementById("right-card");

window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = presentationSection.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight)
  {
    leftCard.style.animation = "from-left-appearing 2000ms ease";
    rightCard.style.animation = "from-right-appearing 2000ms ease";
  }
  
  else
  {
    leftCard.style.animation = "";
    rightCard.style.animation = "";
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