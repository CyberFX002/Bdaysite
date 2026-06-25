function toggleMore(btn) {
  const moreText = btn.previousElementSibling.querySelector(".more-text");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

function openEnvelope() {
  const env = document.getElementById("env");
  const details = document.getElementById("giftDetails");
  const hint = document.getElementById("hint");
  const wrap = document.getElementById("envWrap");
  if (env.classList.contains("open")) return;
  env.classList.add("open");
  hint.textContent = "Send your gift below";
  setTimeout(() => {
    details.classList.add("visible");
  }, 500);
  wrap.style.cursor = "default";
}

function copyAccount() {
  const num = document.getElementById("accNum").textContent;
  navigator.clipboard.writeText(num).catch(() => {});
  const btn = event.target;
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy number";
  }, 2000);
}

function giftSent() {
  const env = document.getElementById("env");
  const details = document.getElementById("giftDetails");
  const thankYou = document.getElementById("thankYou");
  const hint = document.getElementById("hint");
  details.classList.remove("visible");
  setTimeout(() => {
    env.classList.remove("open");
    hint.textContent = "Click to open";
    document.getElementById("envWrap").style.cursor = "pointer";
  }, 300);
  setTimeout(() => {
    thankYou.classList.add("visible");
  }, 600);
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("hamburger");
  nav.classList.toggle("open");
  btn.classList.toggle("open");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
  });
});

function sendWish(e) {
  e.preventDefault();
  const name = document.getElementById("wishName").value.trim();
  const message = document.getElementById("wishMessage").value.trim();
  if (!name || !message) return;

  const thanks = document.getElementById("contactThanks");
  thanks.innerHTML = `<p>🎉 Thank you, ${name}! Your wish has been sent to Favour.</p>`;
  thanks.classList.add("visible");

  document.getElementById("wishName").value = "";
  document.getElementById("wishMessage").value = "";

  setTimeout(() => {
    thanks.classList.remove("visible");
  }, 5000);
}
