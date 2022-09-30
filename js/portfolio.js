let bars = document.querySelector(".mobile-bars");
let menu = document.querySelector("header .menu");
let menuItem = document.querySelectorAll("header .menu ul li");
let bar = document.querySelectorAll(".mobile-bars div");
let a = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("main section");
let aboutSec = document.querySelector("body > main > div > section.hero");
let skillSec = document.querySelector("body > main > div > section.skills");
let progSec = document.querySelector("body > main > div > section.projects");
let contactSec = document.querySelector("body > main > div > section.contact");
let logo = document.querySelector(
  "header .header-contener .header-content .logo p "
);
// document.querySelector("li.about").onclick = function () {
//   sections.forEach((sec) => {
//     sec.classList.add("hidden");
//   });
//   aboutSec.classList.remove("hidden");
// };
document.querySelector("main").onclick = function () {
  menu.classList.remove("active");
  document.querySelectorAll(".mobile-bars div").forEach((el) => {
    el.classList.remove("active");
  });
};

menuItem.forEach((element) => {
  element.addEventListener("click", () => {
    sections.forEach((sec) => {
      sec.classList.add("hidden");
      menu.classList.remove("active");
      document.querySelectorAll(".mobile-bars div").forEach((el) => {
        el.classList.remove("active");
      });
    });
    if (element.classList.contains("about")) {
      aboutSec.classList.remove("hidden");
      logo.classList.remove("active");
    } else if (element.classList.contains("skills")) {
      skillSec.classList.remove("hidden");
      skillSec.classList.remove("show");
      logo.classList.add("active");
    } else if (element.classList.contains("porjects")) {
      progSec.classList.remove("hidden");
      progSec.classList.remove("show");
      logo.classList.add("active");
    } else if (element.classList.contains("contact")) {
      contactSec.classList.remove("hidden");
      contactSec.classList.remove("show");
      logo.classList.add("active");
    }
    menuItem.forEach((el) => {
      el.classList.remove("active");
    });
    element.classList.add("active");
  });
});
bars.onclick = function () {
  menu.classList.toggle("active");
  document.querySelector("header .menu ul").classList.toggle("active");
  bar.forEach((element) => {
    element.classList.toggle("active");
  });
};

// let span = document.querySelector(".hero h1 span");
// window.onload = function () {
//   let int = setInterval(() => {
//     if (span.innerHTML === "Web Developer") {
//       span.innerHTML = "SW Eng Student";
//     } else {
//       span.innerHTML = "Web Developer";
//     }
//   }, 5000);
// };
window.onscroll = function () {
  if (scrollY >= document.querySelector(".main-contener").offsetTop) {
    document.querySelector("header").classList.add("fixed");
    document.querySelector("header .logo p").classList.add("fixed");
    a.forEach((element) => {
      element.classList.add("fixed");
    });
  } else if (scrollY == 0) {
    document.querySelector("header").classList.remove("fixed");
    document.querySelector("header .logo p").classList.remove("fixed");
    a.forEach((element) => {
      element.classList.remove("fixed");
    });
  }
};
let sunholder = document.querySelector(".sunMoon");
let sun = document.querySelector(".sunholder .sun");
sunholder.addEventListener("click", () => {
  sun.classList.toggle("active");
  document.querySelector("body").classList.toggle("day");
  document
    .querySelectorAll(
      ".skills-content,.strain,div.projects-header,div.contact-content,header,.hero,.logo,h1,p,span,i,a,h2,h3"
    )
    .forEach((div) => {
      div.classList.toggle("try");
    });
  document.querySelector("body > div.animate").classList.toggle("day");
});
let projectsForMobile = document.querySelectorAll(
  " main .main-contener section.projects .projects-contener .projects-content .project"
);
projectsForMobile.forEach((prog) => {
  prog.addEventListener("click", () => {
    prog.forEach((pro) => {
      prog.classList.remove("active");
    });
    prog.classList.add("active");
  });
});
// document.querySelectorAll("div").forEach((div) => {
//   div.classList.add("try");
// });
// document.querySelectorAll("h1,p,span,i,a").forEach((div) => {
//   div.classList.add("try");
// });

// document.querySelectorAll("a i").forEach((div) => {
//   div.classList.add("try");
// });
