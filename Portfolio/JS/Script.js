$(document).ready(function () {


    setTimeout(
        function () {
            $("#introHeader").fadeIn("slow");
        }, 2000);

    setTimeout(
        function () {
            $("#introText").fadeIn("slow");
        }, 4000);

    setTimeout(
        function () {
            $(".downArrow").fadeIn("slow");
        }, 6000);
});

$(".downArrow").click(function () {
    $(".jumbotron").slideUp(function () {
        $("#PageOne").slideDown(function() {
            $(".seeNextArrow").fadeIn(function () {
                BounceUp("seeNextArrow", 3);
            });
        });
    });
});

$("#linkedInBtn").click(function () {
    var win = window.open('//www.linkedin.com/in/abbey-tipton/', '_blank');
    if (win) {
        win.focus();
    } else {
        win = window.open('//www.linkedin.com/in/abbey-tipton/');
    }
});

$("#githubBtn").click(function () {
    var win = window.open('https://github.com/abbeytipton', '_blank');
    if (win) {
        win.focus();
    } else {
        win = window.open('https://github.com/abbeytipton');
    }
});

$("#codepenBtn").click(function () {
    var win = window.open('https://codepen.io/abbeytipton', '_blank');
    if (win) {
        win.focus();
    } else {
        win = window.open('https://codepen.io/abbeytipton');
    }
});

$(".seeNextArrow").click(function () {
    var currentPage = $('.projectsView:visible').prop('id');
    var nextPage = $("#" + currentPage).next('.projectsView').attr("id");
    $(".seeNextArrow, .seePreviousArrow").hide();
    $("#" + currentPage).slideUp("slow", function () {
        $("#" + nextPage).slideDown("slow");
    });

    HandlePageArrows(currentPage);
});

$(".seePreviousArrow").click(function () {
    var currentPage = $('.projectsView:visible').prop('id');
    var previousPage = $("#" + currentPage).prev('.projectsView').attr("id");
    $(".seePreviousArrow, .seePreviousArrow").hide();
    $("#" + currentPage).slideUp("slow", function () {
        $("#" + previousPage).slideDown("slow");
    });

    HandlePageArrows(currentPage);
});

function HandlePageArrows(currentPage) {
    var remainingPages = $("#" + currentPage).next('.projectsView').length;
    if (remainingPages != 1) {
        $(".seeNextArrow").fadeIn();
        BounceUp("seeNextArrow", 3);
    }
    var previousPages = $("#" + currentPage).prev('.projectsView').length;
    if (previousPages != 1) {
        $(".seePreviousArrow").fadeIn();
        BounceDown("seePreviousArrow", 3);
    }
};

function BounceUp(element, times) {
    for (i = 0; i < times; i++) {
        $("." + element).show().animate({ marginBottom: "80px" }, 400).animate({ marginBottom: "40px" }, 400);
    }
    $("." + element).show().animate({ marginBottom: "0px" }, 400).animate({ marginBottom: "0px" }, 400);
}

function BounceDown(element, times) {
    for (i = 0; i < times; i++) {
        $("." + element).show().animate({ marginTop: "80px" }, 400).animate({ marginTop: "40px" }, 400);
    }
    $("." + element).show().animate({ marginTop: "0px" }, 400).animate({ marginTop: "0px" }, 400);
}