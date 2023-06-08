// Check If There Is Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Childrens

  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // add Active Class On Eliment With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Rendom Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Loccal Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {
  // Remover Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  // conver the typeof backgroundLocalItem from string to boolean
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
    backgroundOption = true;
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
    backgroundOption = false;
  }
}

// Toogle Spin Class ON Icon
document.querySelector(".toggle-setting .fa-cog").onclick = function () {
  this.classList.toggle("fa-spin");

  // Toggle Class fa-cog for retation on self

  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  //Click On Every List Item
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    handleActive(e);
  });
});

//Selext Landing Page Element
let LandingPage = document.querySelector(".landing-page");

// // Get Array Of Imgs .................................................
// let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// // Function To Randoize Imgs
// function randomizeImges() {
//   if (backgroundOption === true) {
//     backgroundInterval = setInterval(() => {
//       // Get Random Number
//       let randomNumber = Math.floor(Math.random() * imgsArray.length);

//       // Change Background Image Url
//       LandingPage.style.backgroundImage =
//         'url("../imgs/' + imgsArray[randomNumber] + '")';
//     }, 5000);
//   }
// }
// randomizeImges();

// // Switch Random Backgound Option
// const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// // Loop On All List span
// randomBackEl.forEach((span) => {
//   //Click On Every List span
//   span.addEventListener("click", (e) => {
//     handleActive(e); // من العنصر واضافته في عنصر اخر active الموجودة في الاسفل التي تقوم بحذف ال function اتدعاءال

//     if (e.target.dataset.background === "yes") {
//       backgroundOption = true;
//       randomizeImges();
//       localStorage.setItem("background_option", true);
//       // console.log(backgroundOption);
//     } else {
//       backgroundOption = false;
//       clearInterval(backgroundInterval);
//       localStorage.setItem("background_option", false);
//     }
//   });
// });
// randomizeImges();
// ........................................................

// Selext Skills Seletor
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //Skills Outer Hight
  let skillsOuterHeight = ourSkills.offsetHeight;

  //Window Height
  let WindowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop < skillsOffsetTop + skillsOuterHeight - WindowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//  Create Popup with The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat Overlay Elemnt
    let Overlay = document.createElement("div");

    // Add Class To Overlay
    Overlay.className = "popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(Overlay);

    // Create The popup Box
    let popupBox = document.createElement("div");

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    // Add Class To popupBox
    popupBox.className = "popup-box";

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To poprp BOx
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Creat The Close Span
    let closeButton = document.createElement("span");

    // Crean The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // App Text To Close Button
    closeButton.appendChild(closeButtonText);
    // Append Text To Close Button
    closeButton.className = "close-button";

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    e.target.parentNode.remove(); //  parentNode   (close-button)يعني الاب لل

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Lending
const allLending = document.querySelectorAll(".landing-page .links a");

// Creat Function to scrollIntoView

function ScrollToSomwhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault(); // الى عنصر اعتيادي نقوم بالضغط عليه link لتحويل ال
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

ScrollToSomwhere(allBullets);
ScrollToSomwhere(allLending);

function handleActive(e) {
  // Set Color On Root
  e.target.parentElement.querySelectorAll(".active").forEach((elment) => {
    elment.classList.remove("active");
  });
  e.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
    handleActive(e);
  });
});

document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
