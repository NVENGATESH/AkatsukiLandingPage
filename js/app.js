
//   // next menumar code
//     const menuIcon = section.querySelector('.menu-icon');
//     const closeIcon = section.querySelector('.closebar-icon');
//     const menuContent = section.querySelector('.menucontentbar');

//  const memberSections = document.querySelectorAll('.memberboxbarsectioin2content');

// menuIcon.addEventListener("click", transformsmebubar);
// closeIcon.addEventListener("click", transformsmebubarclose);

// menuIcon.style.color="red"

// function transformsmebubar() {
  
//     menuContent.style.transform = "translateX(0px)";

//     menuIcon.style.display="none"
   

// }

// function transformsmebubarclose() {
//     menucontent.style.transform = "translateX(100%)";
 
//      menuIcon.style.display="block"
  
// }
let closeall=document.getElementById('memberboxbarsectioin2close')
document.addEventListener("DOMContentLoaded", function () {
  const memberSections = document.querySelectorAll('.memberboxbarsectioin2content');

  memberSections.forEach(section => {
    const menuIcon = section.querySelector('.menu-icon');
    const closeIcon = section.querySelector('.closebar-icon');
    const menuContent = section.querySelector('.menucontentbar');

    // Initial State
    closeIcon.style.display = "none";
    menuContent.style.transform = "translateX(100%)";

    menuIcon.style.color = "red";

    menuIcon.addEventListener("click", () => {
      menuContent.style.transform = "translateX(0)";
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline";
    });

    closeIcon.addEventListener("click", () => {
      menuContent.style.transform = "translateX(100%)";
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    });
  });
});


