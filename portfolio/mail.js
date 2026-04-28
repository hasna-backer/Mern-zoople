emailjs.init("j-LvRGM9EWvFLoFrS");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_40bfro7",
      "template_zeaau4q",
      this
    ).then(
      () => alert("Message sent successfully"),
      (error) => console.error("FAILED", error)
    );
  });
