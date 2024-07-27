//1- JavaScript for toggling the navigation menu on click
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.navigation');
let links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', () => {
//         if (i !== links.length - 1) {
//             navLinks.classList.toggle('hide');
//         }
//     });
// }
//2-javascript pop-up
function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

function showPopup() {
  document.getElementById('popupOverlay').style.display = 'block';
}

setInterval(showPopup, 30000);
//3-JavaScript for carousel swipe on click
var imageno = 1;
displayimg(imageno);

function nextimg(n) {
  displayimg(imageno += n);
}

function currentSlide(n) {
  displayimg(imageno = n);
}

function displayimg(n) {
  var i;
  var images = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  
  if (n > images.length) {
    imageno = 1;
  }
  
  if (n < 1) {
    imageno = images.length;
  }
  
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  
  images[imageno - 1].style.display = "block";
  dots[imageno - 1].className += " active";
}
//4-javascript Accordion 3 section
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // بستن همه باتن‌ها
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                panels[j].style.display = "none";
            }
        }
        // باز کردن/بستن باتن کلیک شده
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
//5,6-javascript shadow wave icon play video//
document.querySelector('.video-content .video-frame a').addEventListener('mouseenter', function(e) {
  e.target.style.animation = 'none';
  setTimeout(function() {
    e.target.style.animation = '';
  }, 10);
});
// 7-JavaScript for infinite scrolling carousel
document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector('.wrapper');
  
  let posX = 0;
  let intervalId = null;

  wrapper.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
  });

  wrapper.addEventListener("mouseleave", function() {
    intervalId = setInterval(() => {
      posX -= 200;
      if (posX < -570) {
        posX = 1100;
      }
      wrapper.style.transform = `translateX(${posX}px)`;
    }, 1000);
  });

  intervalId = setInterval(() => {
    posX -= 200;
    if (posX < -570) {
      posX = 110;
    }
    wrapper.style.transform = `translateX(${posX}px)`;
  }, 1000);
});
//8-javascript 3 section tab information  holdover//
document.addEventListener("DOMContentLoaded", function() {
  const rectangles = document.querySelectorAll(".rectangle");
  const contents = [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3")];

  rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener("click", () => {
        contents.forEach(content => {
            content.style.display = "none";
        });

        rectangles.forEach(rect => {
            rect.style.backgroundColor = "rgb(30, 30, 30)"; // default color
        });

        contents[index].style.display = "flex";
        rectangle.style.backgroundColor = "#F35525"; // orange color
    });
  });
});



//9-javascript animation hover effect change scale//
document.querySelectorAll('.item img').forEach(img => {
  img.addEventListener('mouseover', () => img.style.transform = 'scale(1.1)');
  img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
});


//10- javascript animated button loader//
document.getElementById('form-submit').addEventListener('click', function(){
  var loader = document.getElementById('loader');
  loader.classList.remove('hidden');
  // Code to fetch data or any other action
  setTimeout(function(){
    loader.classList.add('hidden');
  }, 3000); // Assuming loader should hide after 3 seconds
});


