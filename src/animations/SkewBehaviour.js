export function SkewBehaviour(skewContainerSelector, skewItemSelector) {
  const skewItemContainer = document.querySelector(skewContainerSelector);
  const skewItem = document
    .querySelector(skewItemSelector)
    .getBoundingClientRect();
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
}
