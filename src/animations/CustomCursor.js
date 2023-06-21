import RETICOOL from "reticool";

export default function CustomCursor() {
  const config = {
    /** Replace document cursor. Not recommended to set to 'none' */
    cursor: "none",

    /** Size of your RETICOOL */
    radius: 40,

    /** Border width around your RETICOOL */
    borderWidth: 3,

    content: "<i class='bi bi-dot'></i>",

    /** The default color of your RETICOOL */
    color: "white",

    /** The default opacity of your RETICOOL */
    opacity: 0.85,

    /**
     * Easing of your RETICOOL.
     * The lower the number the slow the RETICOOL will move
     * Recommended to keep this below 0.6 to avoid visual glitches
     */
    ease: 0.6,

    /** Selectors to trigger RETICOOL locking automatically on specific elements */
    lockTriggers: "[data-lock], a, button",

    /** Your RETICOOL color when locked */
    lockColor: "white",

    /** Your RETICOOL opacity when locked */
    lockOpacity: 0.99,

    /** A class added to your RETICOOL when locked */
    lockClass: null,

    /** Amount your RETICOOL will travel around the locked point */
    lockTravel: 0.15,

    /**
     * Expand your RETICOOL over the element it locks to.
     * Set to `false` to disable expansion,
     * Set to `0` to fit the element exactly
     * Set to any other number, including negative to expand by that many pixels around the element
     */
    lockExpand: false,

    /** How fast your RETICOOL changes sizes */
    lockEase: 0.3,
  };

  new RETICOOL(config);

  document.addEventListener("mouseover", (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("hover-underline-animation") || e.target.classList.contains("option")) {
      console.log("hovered");
    }
  });
}
