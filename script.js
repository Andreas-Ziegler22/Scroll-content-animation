const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", slideBoxes);

//slideBoxes();

function slideBoxes() {
  const triggerPoint = (window.innerHeight / 5) * 4;
  console.log(window.innerHeight);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
