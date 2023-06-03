import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveSetup() {
  const scroll = new LocomotiveScroll({
    /* on body */
    el: document.querySelector(".main-section"),
    smooth: true,
  });
  scroll.start();

  scroll.on('call', (obj) => {
    console.log(obj);
  });
}
