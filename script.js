function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



  function toggleDemoDetails() {
    const demoDetails = document.getElementById("demo-details");
    demoDetails.classList.toggle("hidden");
  }

