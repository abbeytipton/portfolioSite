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

    // Set color of the left picture button to grey, so it can't be clicked //
    $(".PictureButtonLeft").css('color', 'grey');
    // Hide the icon background //
    $(".IconBackground").hide();
});


// Project Modals //

// Set up project pictures and text for the modals to use as the user looks at more pictures //
var Project1Pictures = ['~/Images/Projects/Project1-1.png', '~/Images/Projects/Project1-2.png', '~/Images/Projects/Project1-3.png', '~/Images/Projects/Project1-4.png', '~/Images/Projects/Project1-5.png', '~/Images/Projects/Project1-6.png', '~/Images/Projects/Project1-7.png', '~/Images/Projects/Project1-8.png'];
var Project1Text = ['Scrum Flow\'s main functionality is as a digital Scrum Board. Here you can see the Scrum Board layout; each card represents a task. Users can drag their tasks to each category as they work on them.', 'blah2', 'blah3', 'blah4', 'blah5', 'blah6', 'blah7', 'blah8'];
var Project2Pictures = ['~/Images/Projects/Project2-1.png', '~/Images/Projects/Project2-2.png', '~/Images/Projects/Project2-3.png', '~/Images/Projects/Project2-4.png'];
var Project2Text = ['Teachers can add and edit students to their class, setting up a login for each student user.', 'After adding students, teachers can give and take points from each student when they complete tasks, misbehave, or need reinforcement. A sound plays for giving points and a different sound plays for taking points.', 'Teachers can also create a class store, adding items to the store and giving them a point value.', 'Students can then login to see their total amount of points and buy items.', 'Teachers are alerted when students buy items, so if the item is a physical item, the teacher can then give the student their prize.', 'Students can only buy one item a week, but they can log in to see their points and any messages from their teacher.'];
var Project3Pictures = ['~/Images/Projects/Project2-1.png', '~/Images/Projects/Project2-2.png', '~/Images/Projects/Project2-3.png', '~/Images/Projects/Project2-4.png'];
var Project3Text = ['Blah blah headache tracker balck ach card represents a task. Users can drag their tasks to each category as they work on them.', 'blah2', 'blah3', 'blah4'];
var Project4Pictures = ['~/Images/Projects/Project2-1.png', '~/Images/Projects/Project2-2.png', '~/Images/Projects/Project2-3.png', '~/Images/Projects/Project2-4.png'];
var Project4Text = ['Blah blah gift planner balck ach card represents a task. Users can drag their tasks to each category as they work on them.', 'blah2', 'blah3', 'blah4'];

// Set up the current project information to be project one; this will change when the user clicks on a different project //
var CurrentProjectPictures = Project1Pictures;
var CurrentProjectText = Project1Text;
var CurrentIndex = 0;
var ContinueLeftArrow = false;
var ContinueRightArrow = true;

// This method checks the arrows in the project view modals to see if they need to be shown or not //
function CheckProjectArrows() {
    // If there are no more pictures to the right, then make the right arrow gray and add the no Hover class //
    if (CurrentIndex == CurrentProjectPictures.length - 1) {
        $(".PictureButtonRight").css('color', 'grey');
        $(".PictureButtonRight").addClass('NoHover');
        $(".PictureButtonRight").removeClass('Hover');
        ContinueRightArrow = false;
    }
    // Otherwise, make the arrow the right color and add the Hover class //
    else {
        $(".PictureButtonRight").css('color', '#A5BEA8');
        $(".PictureButtonRight").addClass('Hover');
        $(".PictureButtonRight").removeClass('NoHover');
        ContinueRightArrow = true;
    }

    // If there are no more pictures to the left, then make the left arrow gray and add the no Hover class //
    if (CurrentIndex == 0) {
        $(".PictureButtonLeft").css('color', 'grey');
        $(".PictureButtonLeft").addClass('NoHover');
        $(".PictureButtonLeft").removeClass('Hover');
        ContinueLeftArrow = false;
    }
    // Otherwise, make the arrow the right color and add the Hover class //
    else {
        $(".PictureButtonLeft").css('color', '#A5BEA8');
        $(".PictureButtonLeft").addClass('Hover');
        $(".PictureButtonLeft").removeClass('NoHover');
        ContinueLeftArrow = true;
    }
}

// Click function on the right picture button //
$(".PictureButtonRight").click(function () {
    // If we're going to continue //
    if (ContinueRightArrow) {
        CurrentIndex++;
        CheckProjectArrows();
        // Update the picture with the next one in the array and then update the text to match //
        $('#ProjectImage').attr('src', CurrentProjectPictures[CurrentIndex]);
        $('#ProjectText').text(CurrentProjectText[CurrentIndex]);
        UpdateLargePicture();
    }
});

// Click function on the left picture button //
$(".PictureButtonLeft").click(function () {
    // If we're going to continue //
    if (ContinueLeftArrow) {
        CurrentIndex--;
        CheckProjectArrows();
        // Update the picture with the next one in the array and then update the text to match //
        $('#ProjectImage').attr('src', CurrentProjectPictures[CurrentIndex]);
        $('#ProjectText').text(CurrentProjectText[CurrentIndex]);
        UpdateLargePicture();
    }
});

// Update the large picture (zoom in image) with the currently selected picture //
function UpdateLargePicture() {
    document.getElementById('LargePicture').style.backgroundImage = "url(" + CurrentProjectPictures[CurrentIndex] + ")";
}

// On click of the zoom image, we need to make the current picture larger, so show the large picture modal with the picture in it //
$(".ZoomImage").click(function () {
    // Show the placeholder //
    $(".ModalPlaceholder").show();
    // Slide the modal to the right and then slide the large picture from the left //  
    $(".Modal").hide("slide", { direction: "right" }, 500, function () {
        $(".LargePictureBackground").show("slide", { direction: "left" }, 500);
        $(".IconBackground").show();
    });
});

// On click of the small screen zoom image, open the large image in a new tab //
$(".SmallScreenZoomImage").click(function () {
    var win = window.open(CurrentProjectPictures[CurrentIndex], '_blank');
    if (win) {
        win.focus();
    } 
});

// On click of the large image close button, hide the large picture and close button //  
$(".IconBackground").click(function () {
    $(".IconBackground").hide();
    // Slide the big picture to the right and then slide the modal in from the left // 
    $('.LargePictureBackground').hide("slide", { direction: "right" }, 500, function () {
            $("#ProjectModal").show("slide", { direction: "left" }, 500);
    });
});

// Project button one click function - show the project modal for project one // 
$("#Project1Btn").click(function () {
    UpdateProjectModal(1);
    return false;
});

// Project button two click function - show the project modal for project two // 
$("#Project2Btn").click(function () {
    UpdateProjectModal(2);
    return false;
});

// Project button three click function - show the project modal for project three // 
$("#Project3Btn").click(function () {
    UpdateProjectModal(3);
    return false;
});

// Project button four click function - show the project modal for project four // 
$("#Project4Btn").click(function () {
    UpdateProjectModal(4);
    return false;
});

function UpdateProjectModal(projectNumber) {
    // If this is project one, update accordingly //
    if (projectNumber == 1) {
        CurrentProjectText = Project1Text;
        CurrentProjectPictures = Project1Pictures;
        $("#ProjectModalTitle").text("Scrum Flow");
    }
    // If this is project two, update accordingly // 
    else if (projectNumber == 2) {
        CurrentProjectPictures = Project2Pictures;
        CurrentProjectText = Project2Text;
        $("#ProjectModalTitle").text("Class Store and Points");
    }
    else if (projectNumber == 3) {
        CurrentProjectPictures = Project3Pictures;
        CurrentProjectText = Project3Text;
        $("#ProjectModalTitle").text("Headache Tracker");
    }
    else if (projectNumber == 4) {
        CurrentProjectPictures = Project4Pictures;
        CurrentProjectText = Project4Text;
        $("#ProjectModalTitle").text("Gift Planner");
    }
    // Reset the index to 0, set the first picture and text (inside the modal), and update the large picture (for zooming in) //
    CurrentIndex = 0;
    $("#ProjectImage").attr("src", CurrentProjectPictures[0]);
    $("#ProjectText").text(CurrentProjectText[0]);
    UpdateLargePicture();

    // Now show the modal itself and the placeholder //
    $("#ProjectModal").show();
    $(".ModalPlaceholder").show();
}

// Close button click function for the project modals - closes the modal // 
$(".Close").click(function () {
    $(".ModalPlaceholder").hide();
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
    var win = window.open('//www.linkedin.com/in/abbey-tipton/', '_blank');
    if (win) {
        win.focus();
    } else {
        win = window.open('//www.linkedin.com/in/abbey-tipton/');
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
    $("#" + CurrentPage).slideUp(function () {
        // Slide down the page to show //
        $("#" + pageToShow).slideDown();
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
    $("#" + visiblePage).slideUp(function () {
        // Slide down the current project page //
        $("#" + CurrentProject).slideDown();
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


// Captcha //

// Checks for the Captcha and if it hasn't been checked, then shows the red text underneat it //
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        $("#ErrorLabelForCaptcha").text("Please check the box above to indicate that you are not a robot.");
        return false;
    } else {
        return true;
    }
}


