import { gsap } from "gsap";

export default function AboutMeEnterTransition() {
  gsap.to(".aboutme-text", {
    delay: 0.5,
    opacity: 1,
  });
}
