function toggleDropdown() {
          const menu = document.getElementById("dropdownMenu");
          menu.style.display = (menu.style.display === "block") ? "none" : "block";
      }

      window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
              const dropdowns = document.getElementsByClassName("dropdown-content");
              for (let i = 0; i < dropdowns.length; i++) {
                  dropdowns[i].style.display = "none";
              }
          }
        };
        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const descriptions = [
   "Backpain Relief — improve posture and reduce strain with our ergonomic desks.",
  "Heart Health — standing reduces the risk of cardiovascular disease.",
  "Neck Pain — proper monitor alignment can ease tension in the upper spine.",
  "Heart Pain — stay active to avoid sedentary-related heart risks.",
  "Relax — feel more positive and alert throughout your workday.",
  "Boosted Productivity — stay energized and focused by working upright." 
  ];

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Update the text block
  document.getElementById("slide-description").innerHTML = `<p>${descriptions[slideIndex - 1]}</p>`;
}