let Typed = window.Typed;

export default function FirstTransitionAnimation() {
  new Typed("#typewriter", {
    strings: [" "],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true,
  });
}
