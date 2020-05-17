keywords = ["CUTE", "KIND", "CURIOUS MWAH", "SMART", "HANDSOME", "HOT", "SWEET", "SPARKLY", "BEAUTIFUL", "THE BEST BOYFRIEND EVER IM SORRY I CANT FIT THIS ALL IN ONE BOX", "MY WORLD", "YUMMY :)", "SQUISHY", "WARM", "FLUFFY", "BRAVE", "DELICIOUS", "TASTY", "SO CUTE", "HUGGABLE", "COOL :O", "MY PIKACHU", "MY VOID", "HAPPINESS", "MY PRECIOUS", "MY SWEETHEART", "CLEVER", "COMFORTING", "PATIENT"]



$("document").ready(function () {

    var i = 0,
        a = 1;

    setInterval(function () {
        $("#keyword").animate({
            top: "-=30px",
            opacity: 0
        }, "fast", "swing", function () {
            var $this = $(this);
            $this.css("top", "30px");
            i++;
            if (i >= keywords.length) {
                i = 0;
                for (let j = 0; j < keywords.length; j++) {
                    let k = keywords[j],
                        l = Math.floor(Math.random() * (keywords.length - j)) + j;
                    keywords[j] = keywords[l];
                    keywords[l] = k;
                }
            }
            $this.text(keywords[i]).animate({
                top: "0px",
                opacity: 1,
            }, "fast", "swing");
        });

        a = ++a % 40 + 1;

        $("#pic").css("background-image", "url(\"" + a + ".jpg\")");
    }, 5000);
})
