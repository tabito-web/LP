window.addEventListener("scroll", function () {
    const foot = document.querySelector("#foot");
    const scroll = window.pageYOffset;
    if (scroll > 700) {
      foot.style.opacity = "1";
      // console.log(scroll);
    } else {
      foot.style.opacity = "0";
      // console.log(scroll);
    }
  });
