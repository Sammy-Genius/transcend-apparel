const sideMenu = document.querySelector(".side-menu"),
      sideMenuList = document.querySelectorAll(".side-menu-list"),
      menuBtn = document.querySelector(".menu-btn"),
      closeBtn = document.querySelector(".close-btn"),
      sideMenuLi2 = document.querySelector(".link2"),
      sideMenuLi3 = document.querySelector(".link3"),
      tl = gsap.timeline();

      //preloader 
      const preloader = document.querySelector(".preloader");
      setTimeout(() =>{
        preloader.classList.toggle("disappear");
        tl.from("header", {opacity:0, x:-50, duration:1, ease: Power4.easeInOut})
        .from(".text-content h1", {opacity:0, y:-50, duration:1, ease: "bounce"}, "-=.2")
        .from(".text-content p", {opacity:0, y:-50, duration:1, stagger:.5, ease: "bounce"}, "-=.2")
        .from(".text-content h4", {opacity:0, y:-50, duration:1, scale:.3, stagger:.5, ease: "elastic"},"-=.2")
        .from(".image-content .pic", {opacity:0, y:50, duration:1, scale:.3, ease: "elastic"}, "-=.1");
      }, 5000)

      



    //this opens the side menu

      menuBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("open-menu");
        tl.from(".side-menu li", {opacity:0, x:-50, duration:1, stagger:.5, ease: "elastic"}, "+=.2");
      });

    //this closes the side  menu

      closeBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("open-menu");
      });

      sideMenuLi2.addEventListener("click", () => {
        if (sideMenu.classList.contains("open-menu")) {
            sideMenu.classList.remove("open-menu");
        }
      
    });

    sideMenuLi3.addEventListener("click", () => {
        if (sideMenu.classList.contains("open-menu")) {
            sideMenu.classList.remove("open-menu");
        }
      
    });

     

