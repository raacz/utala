const dialogElem = document.getElementsByTagName("dialog")[0];
const showBtn = document.getElementsByClassName("settings")[0];
const closeBtn = document.getElementsByClassName("close")[0];
console.log("heldddlo");


showBtn.addEventListener("click", () => {
  dialogElem.showModal();
  console.log("hello");
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});