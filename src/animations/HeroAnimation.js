import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  let timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline.from(".hero-title-1", { opacity: 0, ease: "power2.out" , duration:3});
  timeline.from(".hero-title-2", { opacity: 0, ease: "power2.out" });

}
