// Page Scroll When Navbar Link Clicked
$(".page-scroll").on("click", function (e) {
  let target = $(this).attr("href");
  $("html").animate(
    {
      scrollTop: $(target).offset().top - 50,
    },
    100,
    "swing"
  );
});

// Navbar Link Active When Scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY < sectionHeight) {
      document.querySelector(".navbar a[href*=" + "home" + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + "home" + "]").classList.remove("active");
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

//Back To Top When Page On Loads
function onLoad() {
  window.location.href = "#";
}

//Scroll Color
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
