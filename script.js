  emailjs.init("lFMIzrBRuOYJWsNoq");

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector(".send-btn");
    const originalText = btn.innerHTML;
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_si4i1ts", "template_d509eof", form)
      .then(() => {
        btn.innerHTML = "Message Sent ✓";
        form.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 3000);
      })
      .catch((err) => {
        btn.innerHTML = "Failed — Try Again";
        btn.disabled = false;
        console.error(err);
      });
  });
