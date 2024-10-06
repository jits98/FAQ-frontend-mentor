document.getElementById("plus-icon").addEventListener("click", function () {
  const img = document.getElementById("plus-icon");
  const desc = document.getElementById("description");

  if (img.src.includes("assets/icon-plus.svg")) {
    img.src = "assets/icon-minus.svg"; // Change to second image
    desc.style.display = "block"; // Show description
  } else {
    img.src = "assets/icon-plus.svg"; // Change back to first image
    desc.style.display = "none"; // Hide description
  }
});

document.getElementById("plus-icon-two").addEventListener("click", function () {
  const img = document.getElementById("plus-icon-two");
  const desc = document.getElementById("description-two");

  if (img.src.includes("assets/icon-plus.svg")) {
    img.src = "assets/icon-minus.svg"; // Change to second image
    desc.style.display = "block"; // Show description
  } else {
    img.src = "assets/icon-plus.svg"; // Change back to first image
    desc.style.display = "none"; // Hide description
  }
});

document
  .getElementById("plus-icon-three")
  .addEventListener("click", function () {
    const img = document.getElementById("plus-icon-three");
    const desc = document.getElementById("description-three");

    if (img.src.includes("assets/icon-plus.svg")) {
      img.src = "assets/icon-minus.svg"; // Change to second image
      desc.style.display = "block"; // Show description
    } else {
      img.src = "assets/icon-plus.svg"; // Change back to first image
      desc.style.display = "none"; // Hide description
    }
  });

document
  .getElementById("plus-icon-four")
  .addEventListener("click", function () {
    const img = document.getElementById("plus-icon-four");
    const desc = document.getElementById("description-four");

    if (img.src.includes("assets/icon-plus.svg")) {
      img.src = "assets/icon-minus.svg"; // Change to second image
      desc.style.display = "block"; // Show description
    } else {
      img.src = "assets/icon-plus.svg"; // Change back to first image
      desc.style.display = "none"; // Hide description
    }
  });
