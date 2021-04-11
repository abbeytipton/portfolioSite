
// On page load //
$(document).ready(function () {

  // After two seconds, load the intro header //
  setTimeout(
    function () {
      $("#IntroHeader").fadeIn("slow");
    }, 2000);

    // After four seconds, load the intro text //
    setTimeout(
      function () {
        $("#IntroText").fadeIn("slow");
      }, 4000);

      // After six seconds, load the projects arrow //
      setTimeout(
        function () {
          $(".DownArrow").fadeIn("slow");
        }, 6000);

        // Set up fancybox plugin - this makes the images in the project modals zoom on click //
        $(".fancybox").fancybox({
          autoSize : false,
          scrolling : 'auto',
          fitToView : false,
          width : '10000px',
          autoWidth: false,
          autoHeight: false,
          autoDimensions: false,
          animationEffect: 'fade',
          clickContent: 'close'
        });

        // Set up the slick plugin - this makes the carousels in the project modals work properly //
        $('.Slick').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400,
          autoplay: false,
          prevArrow: '<button class="SlickButtonLeft"><i class="fas fa-arrow-circle-left"></i></button>',
          nextArrow: '<button class="SlickButtonRight"><i class="fas fa-arrow-circle-right"></i></button>',
        });

        // Set this div to be flex - the slick plugin strips it of this style //
        $(".ModalFlex").css('display', 'flex');
      });

      // Modals //

      // Project button one click function - show the project modal for project one //
      $("#Project1Btn").click(function () {
        $("#ProjectOneModal").css('height', '100%');
      });

      // Close button click function for the project modals - closes the modal //
      $(".Close").click(function () {
        $(".Modal").fadeOut();
      });

      // Main Page //

      var CurrentPage = "PageOne";
      var CurrentProject = "Jumbotron";
      var AnimationFinished = true;
      var BounceUpDone = false;
      var BounceDownDone = false;

      // Click function from the arrows on the original page load //
      $(".DownArrow").click(function () {
        // Slide up the jumbotron and down the first page //
        $(".Jumbotron").slideUp(function () {
          $("#PageOne").slideDown(function () {
            // Fade in the see next arrow and bounce it 3 times //
            $(".SeeNextArrow").fadeIn(function () {
              BounceUp("SeeNextArrow", 3);
            });
          });
        });
      });

      // Click function for the about button - show the about page //
      $("#AboutBtn").click(function () {
        ShowPage("AboutPage");
      });

      // Click function for the contact button - show the contact page //
      $("#ContactBtn").click(function () {
        ShowPage("ContactPage");
      });

      // Click function for the linkedin  button - open the page and try for a new tab //
      $("#LinkedInBtn").click(function () {
        var win = window.open('https://www.linkedin.com/in/abbey-tipton/', '_blank');
        if (win) {
          win.focus();
        } else {
          win = window.open('https://www.linkedin.com/in/abbey-tipton/');
        }
      });

      // Click function for the github button - open the page and try for a new tab //
      $("#GithubBtn").click(function () {
        var win = window.open('https://github.com/abbeytipton', '_blank');
        if (win) {
          win.focus();
        } else {
          win = window.open('https://github.com/abbeytipton');
        }
      });

      // Click function for the codepen button - open the page and try for a new tab //
      $("#CodepenBtn").click(function () {
        var win = window.open('https://codepen.io/abbeytipton', '_blank');
        if (win) {
          win.focus();
        } else {
          win = window.open('https://codepen.io/abbeytipton');
        }
      });

      // Function to show the given page //
      function ShowPage(pageToShow) {
        // Hide the arrows on the side of the screen //
        HideArrows();
        // Get the currnet page and then slide it up //
        GetCurrentPage();
        $("#" + CurrentPage).fadeOut(function () {
          // Slide down the page to show //
          $("#" + pageToShow).fadeIn();
        });
      }

      function GetCurrentPage() {
        // Get the visible page - it's the projects view that isn't hidden //
        var visiblePage = $("div.ProjectsView").not(":hidden").prop("id");
        // If the visible page isn't null, then set that page to variables //
        if (visiblePage != null) {
          CurrentPage = visiblePage;
          CurrentProject = visiblePage;
        }
        // Otherwise, an "other" page is showing, so set that page as the current page //
        else {
          visiblePage = $("div.OtherPageView").not(":hidden").prop("id");
          if (visiblePage != null) {
            CurrentPage = visiblePage;
          }
          // If no pages are visible, then the current page is the jumbotron //
          else {
            CurrentPage = "Jumbotron";
          }
        }
      }

      // Hide the see next/previous arrows //
      function HideArrows() {
        $(".SeeNextArrow").fadeOut();
        $(".SeePreviousArrow").fadeOut();
      }

      // See next page arrow button click //
      $(".SeeNextArrow").click(function () {
        // Get the current page (the visible projects page) and the next page //
        var currentPage = $('.ProjectsView:visible').prop('id');
        var nextPage = $("#" + currentPage).next('.ProjectsView').attr("id");
        // Hide the arrows and slide up the current page and down the next page //
        HideArrows();
        $("#" + currentPage).slideUp("slow", function () {
          $("#" + nextPage).slideDown("slow");
        });
        // Handle the arrows (might need to hide or show depending on what page was shown //
        HandlePageArrows(currentPage);
      });

      // See previous page arrow button click //
      $(".SeePreviousArrow").click(function () {
        // Get the current page (the visible projects page) and the previous page //
        var currentPage = $('.ProjectsView:visible').prop('id');
        var previousPage = $("#" + currentPage).prev('.ProjectsView').attr("id");
        // Hide the arrows and then slide up the current page and down the previous page //
        HideArrows();
        $("#" + currentPage).slideUp("slow", function () {
          $("#" + previousPage).slideDown("slow");
        });
        // Handle the arrows (might need to hide or show depending on what page was shown //
        HandlePageArrows(currentPage);
      });

      function HandlePageArrows(currentPage) {
        // Get the remaining pages based off the passed in current page //
        var remainingPages = $("#" + currentPage).next('.ProjectsView').length;
        // If there are remaining pages, then we need to show the next button //
        if (remainingPages != 1) {
          $(".SeeNextArrow").fadeIn();
          // Only bounce the arrow if it hasn't been bounced already //
          if (BounceUpDone == false) {
            BounceUp("SeeNextArrow", 3);
          }
        }
        // If there are previous pages, then we need to show the previous button //
        var previousPages = $("#" + currentPage).prev('.ProjectsView').length;
        if (previousPages != 1) {
          $(".SeePreviousArrow").fadeIn();
          // Only bounce the arrow if it hasn't been bounced already //
          if (BounceDownDone == false) {
            BounceDown("SeePreviousArrow", 3);
          }
        }
      };

      function BounceUp(element, times) {
        AnimationFinished = false;
        // For the number of times passed in, move the element up //
        for (i = 0; i < times; i++) {
          $("." + element).show().animate({ marginBottom: "80px" }, 400).animate({ marginBottom: "40px" }, 400);
        }
        // After bouncing, move the element back to where it started and set the bool to true //
        $("." + element).show().animate({ marginBottom: "0px" }, 400).animate({ marginBottom: "0px" }, 400, function () {
          AnimationFinished = true;
        });
        // Set this bool to true so we don't bounce the arrows every time the user clicks them, only the first time //
        BounceUpDone = true;
      }

      function BounceDown(element, times) {
        AnimationFinished = false;
        // For the number of times passed in, move the element down //
        for (i = 0; i < times; i++) {
          $("." + element).show().animate({ marginTop: "80px" }, 400).animate({ marginTop: "40px" }, 400);
        }
        // After bouncing, move the element back to where it started and set the bool to true //
        $("." + element).show().animate({ marginTop: "0px" }, 400).animate({ marginTop: "0px" }, 400, function () {
          AnimationFinished = true;
        });
        // Set this bool to true so we don't bounce the arrows every time the user clicks them, only the first time //
        BounceDownDone = true;
      }

      // Close button click function (this will be for "other" pages always //
      $(".CloseBtn").click(function () {
        // Get the visible page and slide it up //
        var visiblePage = $("div.OtherPageView").not(":hidden").prop("id");
        $("#" + visiblePage).fadeOut(function () {
          // Slide down the current project page //
          $("#" + CurrentProject).fadeIn();
          // If the current project is not the jumbotron, then we need to set up the arrows for the page //
          if (CurrentProject != "Jumbotron") {
            var nextPage = $("#" + CurrentProject).next('.ProjectsView').prop("id");
            if (nextPage == null) {
              nextPage = $("#" + CurrentProject).prev('.ProjectsView').prop("id");
            }
            HandlePageArrows(nextPage);
          }
        });
      });

      // The Indeed icon isn't from FA, so we have to toggle the src on hover to make the effect the same as the ones that are //
      $("#IndeedIcon").mouseover(function(){
        $("#IndeedIcon").attr("src","Images/Icons/Icon-I-Hover.png");
      });

      $("#IndeedIcon").mouseout(function(){
        $("#IndeedIcon").attr("src","Images/Icons/Icon-I.png");
      });

      // On the copy email function, we create a fake textarea, fill it with the email we want to copy, copy the text, and then remove the element //
      function CopyEmail () {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = "********@******.com";
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
