"using script";
const rightButton = document.querySelector(".btn--right");
const leftButton = document.querySelector(".btn--left");
const sliderView = document.querySelectorAll(".slider");
const roller = document.querySelector(".section1");
const dotBox = document.querySelector(".dots");
// roller.style.overflow = "visible";
// roller.style.transform = `scale(0.4) translateX(-800px)`;
let curSlide = 0;
let maxSlide = sliderView.length;
console.log(maxSlide);
sliderView.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

//goToSlide
const goToSlide = function (slide) {
  sliderView.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};
//creating dots on slides
const createDots = function () {
  sliderView.forEach(function (_, i) {
    dotBox.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_circle" data-slide="${i}"></button>`
    );
  });
};
createDots();

//activating slide using different colour
const activateSlide = function (slide) {
  dotBox.forEach();
};

//nextslide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
// nextSlide(curSlide);

rightButton.addEventListener("click", nextSlide);

//previousSlide
const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
// previousSlide(curSlide);
leftButton.addEventListener("click", previousSlide);

//moving slides using arrow keys
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") previousSlide();
});

dotBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots_circle")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
  }
});

//adding cookie msg
const startingContainer = document.querySelector(".starter");
//creating an element using js in DOM

const cookie = document.createElement("div");
cookie.classList.add("cookie");

cookie.innerHTML = `We are using cookie for better user experience <button class="cookie-button">Accept</button>`;

//appending(adding) this cooking msg at the bottom of startingContainer
startingContainer.append(cookie);
const cookieButton = document.querySelector(".cookie-button");
cookieButton.addEventListener("click", function () {
  cookie.remove();
});

//adding automatic typing animation
let i = 0;
const timeDelayForNextCharacter = 80;
const text = `As the world continues to respond to COVID-19, we are working to do
our part by ensuring the safety of our employees, striving to
protect the health and well-being of the communities in which we
operate, and providing technology and resources to our customers to
help them do their best work while remote.`;

function typewriter() {
  if (i <= text.length) {
    document.querySelector(".automaticTypingArea").textContent +=
      text.charAt(i);
    i++;
    //this timeout function is used to call this typewriter function again after every character
    setTimeout(typewriter, timeDelayForNextCharacter);
  }
}
// typewriter();
setTimeout(typewriter, 8000);

//exposing sections when their viewport comes

const section = document.querySelectorAll(".section1");
const callBackFunction = function (entries, observer) {
  const [entry] = entries; //same as const entry= entries[0]
  // console.log(entry);
  if (!entry.isIntersecting) return; //guard class
  entry.target.classList.remove("section_hidden");
};

const observerOption = {
  root: null,
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(
  callBackFunction,
  observerOption
);
