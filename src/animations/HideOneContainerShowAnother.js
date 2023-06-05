import { gsap } from "gsap";

export default function HideOneContainerShowAnother(firstContainerSelector, secondContainerSelector) {

    let tl = gsap.timeline();

    tl.to(firstContainerSelector, { duration: 0.5, opacity: 0, })

    tl.to(secondContainerSelector, { duration: 0.5, opacity: 1, display: "block" })

}
