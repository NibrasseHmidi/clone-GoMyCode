var index = 0;
    var slides = document.querySelectorAll(".slides");
    var dot = document.querySelectorAll(".dot");

    function changeSlide() {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index > slides.length - 1) {
            index = 0;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dot[i].classList.remove("active");
        }

        slides[index].style.display = "block";
        dot[index].classList.add("active");

        index++;

        setTimeout(changeSlide, 2000);

    }

    changeSlide();

    

    var index8 = 0;
    var slides8 = document.querySelectorAll(".slides8");
    var dot8 = document.querySelectorAll(".dot8");

    function changeSlide8() {

        if (index8 < 0) {
            index8 = slides8.length - 1;
        }

        if (index8 > slides8.length - 1) {
            index8 = 0;
        }

        for (let i = 0; i < slides8.length; i++) {
            slides8[i].style.display = "none";
            dot8[i].classList.remove("active");
        }

        slides8[index8].style.display = "block";
        dot8[index8].classList.add("active");

        index8++;

        setTimeout(changeSlide8, 2000);

    }

    changeSlide8();

    