const forma = document.getElementById("forma");
forma.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(forma);
  const unosi = Object.fromEntries(formData.entries());
  console.log(unosi);
});
