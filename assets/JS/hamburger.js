// document.querySelector('.navbar__menu').classList.toggle('show');
//                 document.querySelector('.navbar__actions').classList.toggle('show');
//                 document.querySelector('.hamburger').classList.toggle('active');


                const ham=document.querySelector('.hamburger');
                // const menu=document.querySelector(".navbar__menu");
                // const actions=document.querySelector(".navbar__actions");
                const mobileMenu=document.querySelector(".mobile-menu");
                const backdrop=document.querySelector(".backdrop");
                const body = document.body;
                ham.addEventListener("click",()=>{
                    ham.classList.toggle('active');
                    // menu.classList.toggle("show");
                    // actions.classList.toggle ("show");
                    mobileMenu.classList.toggle("open");
                    backdrop.classList.toggle("show");
                                body.classList.toggle('menu-open');
                        
                    }
                )
                backdrop.addEventListener("click",()=>{
                     mobileMenu.classList.remove("open");
                       backdrop.classList.remove("show");
                                body.classList.remove('menu-open');
                                ham.classList.remove('active');
                })
                
                