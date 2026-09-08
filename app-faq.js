document.querySelectorAll(".qa-q").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".qa-item").classList.toggle("open");
  });
});
