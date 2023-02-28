document.querySelector(".navbut").addEventListener("click", function () {
  document.querySelector("#bar").classList.toggle("hide-col");
});

$("img.i1").click(function img1() {
  $("img.i2").toggle("op");
  var a = 1;
  pr(a);
});
$("img.i2").click(function img2() {
  $("img.i1").toggle("op");
  var a = 2;
  pr(a);
});

function pr(a) {
  console.log(a);
}
