const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue) {
    alert("Please enter data to generate QR code.");
    return;
  }
  if (preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  let imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  let newImg = new Image();
  newImg.onload = function() {
    qrImg.src = this.src;
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  };
  newImg.onerror = function() {
    alert("Failed to generate QR code. Please try again.");
    generateBtn.innerText = "Generate QR Code";
  };
  newImg.src = imgSrc;
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
