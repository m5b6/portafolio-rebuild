import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

let Typed = window.Typed;
export default function HeroAnimation() {
  const skewItemContainer = document.querySelector(".skew-container");
  const skewItem = document.querySelector(".skew").getBoundingClientRect();
  const imageCenterX = skewItem.left + skewItem.width / 2;
  const imageCenterY = skewItem.top + skewItem.height / 2;
  document.body.addEventListener("mousemove", function (e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    const xCalc = (clientX - imageCenterX) * 0.0000001;
    const yCalc = (clientY - imageCenterY) * 0.0000002;
    skewItemContainer.style.setProperty("--x-translate", `${xCalc}`);
    skewItemContainer.style.setProperty("--y-translate", `${yCalc}`);
  });

  let timeline = gsap.timeline({
    defaults: { duration: 1 },
    onComplete: function () {
      new Typed("#typewriter", {
        strings: [
          " <strong>frontend</strong>",
          " <strong>web development</strong>",
          " <strong>vue</strong>",
          " <strong>javascript</strong>",
          " <strong>typescript</strong>",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        smartBackspace: true, // this is a default
        loop: true,
      });
    },
  });
  timeline.from(".hero-title-1", {
    delay: 0.3,
    opacity: 0,
    ease: "power3.inOut",
    scale: 0.95,
    y: 10,
    duration: 1.7,

    transform:
      "matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)",
  }),
    timeline.from(
      ".hero-title-2",
      {
        delay: 1,
        opacity: 0,
        ease: "power3.inOut",
        scale: 0.95,
        y: 10,
        duration: 1.7,
        transform:
          "matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)",
      },
      "<-0.8"
    );
  timeline.from(
    ".hero-title-3",
    {
      delay: 1,
      opacity: 0,
      ease: "power3.inOut",
      scale: 0.95,
      y: 10,
      duration: 1.7,
      transform:
        "matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)",
    },
    "<-0.8"
  );
}
