document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll("#sidebar ul li a");
  
    function updateSidebar() {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");}});
      
          sidebarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");}});}
  
    window.addEventListener("scroll", updateSidebar);
    updateSidebar();
  });