AOS.init({
  offset: 120,
  delay: 0,
  duration: 2000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

const result = document.getElementById("result");
const form = document.getElementById("form");

console.log("Before fetch request");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const json = {};

  for (const [key, value] of formData.entries()) {
    json[key] = value;
  }

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(json),
  })
    .then(async (response) => {
      console.log("Inside fetch .then");
      let jsonResponse = await response.json();
      if (response.status == 200) {
        console.log("Success:", jsonResponse);
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log("Error:", response);
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log("Fetch error:", error);
      result.innerHTML = "Something went wrong!";
    })
    .then(() => {
      console.log("After fetch request");
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});

gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".Naam", {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      { x: 500, y: 100 },
      { x: 750, y: -100 },
      { x: 350, y: -50 },
      { x: 600, y: 100 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: -250 },
    ],
    curviness: 2,
    autoRotate: true,
  },
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 2000,
  triggerHook: 0,
})
  .setTween(tween)
  .setPin(".animation")
  .addTo(controller);