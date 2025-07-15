// for the carrousel
const slides = document.querySelectorAll(".carousel__slide");
const container = document.querySelector(".carousel__slides");
let index = 0;

function showSlide(i) {
  container.style.transform = `translateX(-${i * 100}%)`;
  slides.forEach((slide, idx) => {
    const img = slide.querySelector("img");
    img.style.animation = "none"; // reset
    void img.offsetWidth; // force reflow
    img.style.animation = "zoomIn 5s ease-in-out forwards";
    slide.classList.toggle("active", idx === i);
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// for the text carrousel
document.addEventListener("DOMContentLoaded", () => {
  const textSlides = document.querySelectorAll(".text-slide");
  let textIndex = 0;

  function showTextSlide(i) {
    textSlides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  setInterval(() => {
    textIndex = (textIndex + 1) % textSlides.length;
    showTextSlide(textIndex);
  }, 5000);

  showTextSlide(textIndex);
});

// for executive
// also this is where i add more executive to make it change
const gnaasLeaders = [
  { img: "images/1.jpg", title: "Chaplain", name: "Pastor Daniel Amoasi" },
  { img: "images/2.jpg", title: "Vice President", name: "Jane Doe" },
  { img: "images/3.jpg", title: "Secretary", name: "John Smith" },
  { img: "images/4.jpg", title: "Organizer", name: "Alice Brown" },
  { img: "images/5.jpg", title: "Treasurer", name: "Michael Owusu" },
];

const gnaasMainImg = document.querySelector(".gnaas-leader-img");
const gnaasTitle = document.getElementById("gnaas-leader-title");
const gnaasName = document.getElementById("gnaas-leader-name");
const gnaasThumbs = document.querySelectorAll(".gnaas-leader-thumb");
const gnaasPrev = document.getElementById("gnaas-leader-prev");
const gnaasNext = document.getElementById("gnaas-leader-next");

let gnaasIndex = 0;

function gnaasUpdateDisplay(i) {
  const leader = gnaasLeaders[i];
  gnaasMainImg.src = leader.img;
  gnaasTitle.textContent = leader.title;
  gnaasName.textContent = leader.name;
  gnaasThumbs.forEach((thumb, j) => {
    thumb.classList.toggle("gnaas-leader-active", j === i);
  });
}

gnaasThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    gnaasIndex = parseInt(thumb.dataset.index);
    gnaasUpdateDisplay(gnaasIndex);
  });
});

gnaasPrev.addEventListener("click", () => {
  gnaasIndex = (gnaasIndex - 1 + gnaasLeaders.length) % gnaasLeaders.length;
  gnaasUpdateDisplay(gnaasIndex);
});

gnaasNext.addEventListener("click", () => {
  gnaasIndex = (gnaasIndex + 1) % gnaasLeaders.length;
  gnaasUpdateDisplay(gnaasIndex);
});

setInterval(() => {
  gnaasIndex = (gnaasIndex + 1) % gnaasLeaders.length;
  gnaasUpdateDisplay(gnaasIndex);
}, 4000);

gnaasUpdateDisplay(gnaasIndex); // Initial load
