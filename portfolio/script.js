<script>
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
      )
      .then(
        function () {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("FAILED... Try again.");
          console.error(error);
        }
      );
  });
</script>
