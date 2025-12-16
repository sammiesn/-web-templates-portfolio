document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const header = document.querySelector("header");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
        });
    }

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
});

const toggle = document.getElementById("toggleBilling");
const prices = document.querySelectorAll(".price");
const badges = document.querySelectorAll(".badge-save");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const monthly = price.getAttribute("data-monthly");
    const yearly = price.getAttribute("data-yearly");

    if (toggle.checked) {
      price.innerHTML = `$${yearly}<span>/year</span>`;
    } else {
      price.innerHTML = `$${monthly}<span>/month</span>`;
    }
  });

  // Show badge only in yearly mode
  badges.forEach(badge => {
    badge.style.display = toggle.checked ? "inline-block" : "none";
  });
});


toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const monthly = price.getAttribute("data-monthly");
    const yearly = price.getAttribute("data-yearly");

    // Fade out
    price.classList.add("fade-out");

    setTimeout(() => {
      // Change the text after fade-out
      if (toggle.checked) {
        price.innerHTML = `$${yearly}<span>/year</span>`;
      } else {
        price.innerHTML = `$${monthly}<span>/month</span>`;
      }

      // Fade in
      price.classList.remove("fade-out");
      price.classList.add("fade-in");

      // Remove fade-in class after animation
      setTimeout(() => {
        price.classList.remove("fade-in");
      }, 300);

    }, 300);
  });

  // Show badge only in yearly mode
  badges.forEach(badge => {
    badge.style.display = toggle.checked ? "inline-block" : "none";
  });
});

const notes = document.querySelectorAll(".billed-annually-note");

toggle.addEventListener("change", () => {
  // existing price + badge + glow code stays the same

  // Show note only in yearly mode
  notes.forEach(note => {
    note.style.display = toggle.checked ? "block" : "none";
  });
});

