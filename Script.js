// On page load //
$(document).ready(function() {

  // After two seconds, load the intro header //
  setTimeout(
    function() {
      $("#IntroHeader").fadeIn("slow");
    }, 2000);

  // After four seconds, load the intro text //
  setTimeout(
    function() {
      $("#IntroText").fadeIn("slow");
    }, 4000);

  // After six seconds, load the projects arrow //
  setTimeout(
    function() {
      $(".DownArrow").fadeIn("slow");
    }, 6000);

  // Set up fancybox plugin - this makes the images in the project modals zoom on click //
  $(".fancybox").fancybox({
    autoSize: false,
    scrolling: 'auto',
    fitToView: false,
    width: '5000px',
    autoWidth: false,
    autoHeight: false,
    autoDimensions: false,
    animationEffect: 'fade',
    clickContent: 'close',
    border: 0,
    outline: 0
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

  // Set up the slick plugin for the project pages //
  $('.ProjectSlick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    speed: 400,
    autoplay: false,
    nextArrow: '<button class="SlickButtonDown"><i class="fas fa-arrow-circle-down"></i></button>',
    prevArrow: '<button class="SlickButtonUp"><i class="fas fa-arrow-circle-up"></i></button>',
  });

  // Set these divs to be flex - the slick plugin strips them of this style //
  $(".ModalFlex").css('display', 'flex');
  $(".ProjectsFlex").css('display', 'flex');
});

//// Modals ////

// Project button one click function - show the project modal for project one //
$("#Project1Btn").click(function() {
  $("#ProjectOneModal").css('height', '100%');
  $(".ProjectPages, .Navbar").css('opacity', '.4');
});

// Project button two click function - show the project modal for project two //
$("#Project2Btn").click(function() {
  $("#ProjectTwoModal").css('height', '100%');
  $(".ProjectPages, .Navbar").css('opacity', '.4');
});

// Project button three click function - show the project modal for project three //
$("#Project3Btn").click(function() {
  $("#ProjectThreeModal").css('height', '100%');
  $(".ProjectPages, .Navbar").css('opacity', '.4');
});

// Close button click function for the project modals - closes the modal //
$(".Close").click(function() {
  $(".Modal").css('height', '0%');
  $(".ProjectPages, .Navbar").css('opacity', '1');
});

//// Main Page ////

// Click function from the arrows on the original page load //
$(".DownArrow").click(function() {
  // Slide up the jumbotron and down the first page //
  $(".Jumbotron").slideUp(function() {
    $('.ProjectPages').animate({
      height: '100vh'
    }, 500);
    $('.Navbar').css('background-color', 'white');
  });
});

// Show page function for "other" pages (about and contact) //
function ShowPage(pageToShow) {
  // Make the close button invisible //
  $('.CloseBtn').css('color', 'transparent');

  // If the jumbotron is not showing, then the project pages are. So slide them up, then slide down the page to show //
  if (!$(".Jumbotron").is(":visible")) {
    $('.ProjectPages').animate({
      height: '0vh'
    }, 500, function() {
      $("#" + pageToShow).slideDown(500, function() {
        // Show the close button now that everthing is loaded - it hops and looks strange otherwise //
        $(".CloseBtn").css('color', '#A5BEA8');
      });
    });
  }
  // If the jumbotron is showing, just slide down the page to show and show the close button //
  else {
    $("#" + pageToShow).slideDown(500, function() {
      $(".CloseBtn").css('color', '#A5BEA8');
    });
  }
}

// Click function for the about button - show the about page //
$("#AboutBtn").click(function() {
  // If the contact page is visible, then hide it first //
  if ($("#ContactPage").is(":visible")) {
    $("#ContactPage").slideUp(500, function() {
      ShowPage("AboutPage");
    });
  }
  // Otherwise, just show the about page //
  else {
    ShowPage("AboutPage");
  }
});

// Click function for the contact button - show the contact page //
$("#ContactBtn").click(function() {
  // If the about page is visible, then hide it first //
  if ($("#AboutPage").is(":visible")) {
    $("#AboutPage").slideUp(500, function() {
      ShowPage("ContactPage");
    });
  }
  // Otherwise, just show the contact page //
  else {
    ShowPage("ContactPage");
  }
});

// Close button click function (this will be for "other" pages) //
$(".CloseBtn").click(function() {
  // Make this item transparent (the close button)
  $(this).css('color', 'transparent');
  // Get the visible page and slide it up //
  var visiblePage = $(this).closest('.OtherPageView').attr('id');
  $("#" + visiblePage).slideUp(500, function() {
    // If the jumbotron isn't showing, then we need to slide down the project pages //
    if (!$(".Jumbotron").is(":visible")) {
      $('.ProjectPages').animate({
        height: '100vh'
      }, 500);
    }
  });
});

//// Buttons ////

// Click function for the linkedin  button - open the page and try for a new tab //
$("#LinkedInBtn").click(function() {
  var win = window.open('https://www.linkedin.com/in/******', '_blank');
  if (win) {
    win.focus();
  } else {
    win = window.open('https://www.linkedin.com/in/******');
  }
});

// Click function for the github button - open the page and try for a new tab //
$("#GithubBtn").click(function() {
  var win = window.open('https://github.com/******');', '_blank');
  if (win) {
    win.focus();
  } else {
    win = window.open('https://github.com/******');');
  }
});

// The Indeed icon isn't from FA, so we have to toggle the src on hover to make the effect the same as the ones that are //
$("#IndeedIcon").mouseover(function() {
  $("#IndeedIcon").attr("src", "Images/Icons/Icon-I-Hover.png");
});

$("#IndeedIcon").mouseout(function() {
  $("#IndeedIcon").attr("src", "Images/Icons/Icon-I.png");
});

// On the copy email function, we create a fake textarea, fill it with the email we want to copy, copy the text, and then remove the element //
function CopyEmail() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = "******@gmail.com";
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
