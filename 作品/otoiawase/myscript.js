// myscript.js
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    alert("お問い合わせが送信されました！");
  });
});
