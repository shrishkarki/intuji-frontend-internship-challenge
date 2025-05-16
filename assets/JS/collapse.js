const question = document.querySelectorAll(".faq__question");

question.forEach((item) => {
    item.addEventListener('click', () => {
        console.log("clickkkkkedddd")

        const parent = item.parentElement;
        const icon = item.querySelector(".icon img");
        console.log("icon", icon);



        parent.classList.toggle("active");
        if (parent.classList.contains("active")) {
            icon.src = "./assets/icons/minus.png";
            
        }
        else {
            icon.src = "./assets/icons/plus.png";
        }
    })
})