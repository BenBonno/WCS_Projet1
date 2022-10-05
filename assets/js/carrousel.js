document.body.onload = function () {
    nbr = 5;
    p = 0;
    containerCarrousel = document.getElementById("containerCarrousel");
    leftChevron = document.getElementById("leftChevron");
    rightChevron = document.getElementById("rightChevron");
    containerCarrousel.style.width = (800 * nbr) + "px";

    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = ("photo");
        div.style.backgroundImage = "url('assets/img/im" + i + ".jpg')";
        containerCarrousel.appendChild(div);
        rightChevron.onclick = function () {
            if (p > -nbr + 1)
                p--;
            containerCarrousel.style.transform = "translate(" + p * 800 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
            afficherMasquer()
        }
        leftChevron.onclick = function () {
            if (p < 0)
                p++;
            containerCarrousel.style.transform = "translate(" + p * 800 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
            afficherMasquer()
        }


        function afficherMasquer() {
            if (p == -nbr + 1) {
                rightChevron.style.visibility = "hidden";
            } else {
                rightChevron.style.visibility = "visible";
            }

            if (p == 0) {
                leftChevron.style.visibility = "hidden";
            } else {
                leftChevron.style.visibility = "visible";
            }

        }
    }
}
