<%@ Page Language="C#" Inherits="Portfolio.Default" %>
<!DOCTYPE html>
<html>
    
<head runat="server">
	<title>Abbey Tipton</title>
    <link href="/CSS/Layout.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather+Sans&display=swap" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
    
<body>
	<form id="form1" runat="server">
       
        <div class="navbar">
            <div class="icons">
                <i class="fas fa-2x fa-info-circle"></i>
                <i class="fas fa-2x fa-envelope-square"></i>
                <i id="linkedInBtn" class="fab fa-2x fa-linkedin"></i>
                <i id="githubBtn" class="fab fa-2x fa-github-square"></i>
                <i id="codepenBtn" class="fab fa-2x fa-codepen"></i>
            </div>
        </div>
            
        <div class="jumbotron">
            <div class="overlay">
                <div id="introHeader" class="introHeader">
                    <h1>Hi, I'm Abbey.</h1>
                </div>
                <div id="introText" class="introText">
                    <p>
                        I'm a Full Stack Software Developer. I write clean, efficient, mobile-ready code that 
                        focuses on the end user and their experience.<br><br>
                        Want to see my projects?
                    </p>
                    <div class="downArrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
            
         <div class="seePreviousArrow">
           <i class="fas fa-chevron-circle-up"></i>
            </div>    
        <div class="seeNextArrow">
           <i class="fas fa-chevron-circle-down"></i>
            </div>
            
        <div class="projectsView" id="PageOne">
            <div class="projectsFlex">
                <div class="flexChild">
                    <img src="/Images/project1.png" class="projectPictures">
                </div>
                <div class="flexChild">
                    <h1>Scrum Flow</h1>
                    <p class="projectText">
                        A digital Scrum Board built and used by T&W Operations.
                    </p>
                    <div class="projectButtons">
                        <button class="projectButton">Preview</button>
                        <button class="projectButton">Visit</button>
                    </div>
                </div>
            </div>
             <hr class="projectsLine">
                
             <div class="projectsFlex">
                <div class="flexChild">
                    <img src="/Images/project1.png" class="projectPictures">
                </div>
                <div class="flexChild">
                    <h1>Headache Tracker</h1>
                    <p class="projectText">
                        A simple, clean, easy-to-use web app that allows users to log headaches and symptoms. After logging headaches, users can then see graphs of their most common triggers.
                    </p>
                    <div class="projectButtons">
                        <button class="projectButton">Preview</button>
                        <button class="projectButton">Visit</button>
                    </div>
                </div>
            </div>
        </div>
            
            <div class="projectsView" id="PageTwo">
            <div class="projectsFlex">
                <div class="flexChild">
                    <img src="/Images/project1.png" class="projectPictures">
                </div>
                <div class="flexChild">
                    <h1>Class Sap</h1>
                    <p class="projectText">
                       A digital store and points for teachers.
                    </p>
                    <div class="projectButtons">
                        <button class="projectButton">Preview</button>
                        <button class="projectButton">Visit</button>
                    </div>
                </div>
            </div>
             <hr class="projectsLine">
                
             <div class="projectsFlex">
                <div class="flexChild">
                    <img src="/Images/project1.png" class="projectPictures">
                </div>
                <div class="flexChild">
                    <h1>Holiday Gift Planner</h1>
                    <p class="projectText">
                    A webapp that lets users plan and track gifts.
                        </p>
                    <div class="projectButtons">
                        <button class="projectButton">Preview</button>
                        <button class="projectButton">Visit</button>
                    </div>
                </div>
            </div>
        </div>
            
            
	</form>
        
    <script src="JS/Script.js" type="text/javascript"></script>
</body>
</html>
