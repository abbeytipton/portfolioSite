<%@ Page Language="C#" Inherits="Portfolio.Default" %>
<!DOCTYPE html>
<html>
   <head runat="server">
      <title>Abbey Tipton</title>
      
      <!-- CSS links -->
      <link href="/CSS/Layout.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
      <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather+Sans&display=swap" rel="stylesheet"/>
      <!-- Jquery/JS links -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'>
      <script src="//code.jquery.com/jquery-1.12.4.js"></script>
      <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <!-- Link for the contact form Captcha -->
      <script src='https://www.google.com/recaptcha/api.js'></script>
      
   </head>
   <body>
      <form id="form1" runat="server">
      
         <!-- Nav bar (to right of page) -->
         <div class="Navbar">
            <div class="Icons">
               <i id="AboutBtn" class="fas fa-2x fa-info-circle"></i>
               <i id="ContactBtn" class="fas fa-2x fa-envelope-square"></i>
               <i id="LinkedInBtn" class="fab fa-2x fa-linkedin"></i>
               <i id="GithubBtn" class="fab fa-2x fa-github-square"></i>
               <i id="CodepenBtn" class="fab fa-2x fa-codepen"></i>
            </div>
         </div>
         
        <!-- The jumbotron is the page opener, it is seen when the page loads -->
        <div class="Jumbotron" id="Jumbotron">
             <!-- The overlay is a color overlay over the bg picture -->
             <div class="Overlay">
             
               <!-- Header text - fades in after the page loads -->
               <div id="IntroHeader" class="IntroHeader">
                  <h1>Hi, I'm Abbey.</h1>
               </div>
               
               <div id="IntroText" class="IntroText">
                  <p>
                     I'm a Full Stack Software Developer. I write clean, efficient, mobile-ready code that 
                     focuses on the end user and their experience.<br><br>
                     Want to see my projects?
                  </p>
                  
                  <!-- The down arrow is animated with CSS and shows the remainder of the page when clicked -->
                  <div class="DownArrow">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
         
         <!-- This div is a Modal that shows pictures larger when they're clicked and is otherwise hidden -->
         <div class="LargePicture">
            <div class="CloseLargeImageFlex">
                <i class="fas fa-times-circle IconBackground"></i>
            </div>
        </div>
          
         <!-- These two arrows show the next/previous pages of projects -->  
         <div class="SeePreviousArrow">
            <i class="fas fa-chevron-circle-up"></i>
         </div>
            
         <div class="SeeNextArrow">
            <i class="fas fa-chevron-circle-down"></i>
         </div>
           
         <!-- Page one of the projects view --> 
         <div class="ProjectsView" id="PageOne">
            <div class="ProjectsFlex">
            
               <!-- Image of the project -->
               <div class="FlexChild">
                  <img src="/Images/project1.png" class="ProjectPictures">
               </div>
              <!-- Text about the project -->
               <div class="FlexChild">
                  <h1>Scrum Flow</h1>
                  <p class="ProjectText">
                     A fully functional digital Scrum Board built for T&W Operations. This clean, easy-to-use website allows the development team using it to plan and carry out Sprints, organize their work as Stories, Defects, or Bugs, and helps management keep track of productivity with graphs and charts. 
                  </p>
                  <!-- Buttons to preview/visit -->
                  <div class="ProjectButtons">
                     <asp:Button ID="Project1Btn" runat="server" AutoPostback="false" BorderStyle="None" class="ProjectButton" Text="Preview" />
                     <button class="ProjectButton">Visit</button>
                  </div>
               </div>
            </div>
            
            <!-- Line diving projects -->
            <hr class="ProjectsLine">
            
            <!-- Second project of page one -->
            <div class="ProjectsFlex">
               <div class="FlexChild">
                  <img src="/Images/project1.png" class="ProjectPictures">
               </div>
               <div class="FlexChild">
                  <h1>Headache Tracker</h1>
                  <p class="ProjectText">
                     A simple, clean, easy-to-use web app that allows users to log headaches and symptoms. After logging headaches, users can then see graphs of their most common triggers.
                  </p>
                  <div class="ProjectButtons">
                     <button class="ProjectButton">Preview</button>
                     <button class="ProjectButton">Visit</button>
                  </div>
               </div>
            </div>
         </div>
          
         <!-- Page two of projects -->  
         <div class="ProjectsView" id="PageTwo">
            <div class="ProjectsFlex">
               <div class="FlexChild">
                  <img src="/Images/project1.png" class="ProjectPictures">
               </div>
               <div class="FlexChild">
                  <h1>Class Sap</h1>
                  <p class="ProjectText">
                     A digital classroom management tool for teachers and their students. This mobile-friendly web app allows teachers to assign and remove points from students as they complete tasks, and allows students to shop at their teacher's online store using their points.
                  </p>
                  <div class="ProjectButtons">
                     <button class="ProjectButton">Preview</button>
                     <button class="ProjectButton">Visit</button>
                  </div>
               </div>
            </div>
            
            <hr class="ProjectsLine">
            
            <!-- Second project on page two -->
            <div class="ProjectsFlex">
               <div class="FlexChild">
                  <img src="/Images/project1.png" class="ProjectPictures">
               </div>
               <div class="FlexChild">
                  <h1>Holiday Gift Planner</h1>
                  <p class="ProjectText">
                     This web app is in progress. When completed, users will be able to add friends and family members they want to buy gifts for; after buying gifts, users can log how much the recipient liked the gift. The next time the recipient neesd a gift, the user will be able to see what they bought them previously, how much they liked it, and more relevant gift ideas.
                  </p>
                  <div class="ProjectButtons">
                     <button class="ProjectButton">Preview</button>
                     <button class="ProjectButton">Visit</button>
                  </div>
               </div>
            </div>
         </div>
          
        <!-- Other pages are pages viewed from the navbar -->  
        <!-- About page -->
         <div class="OtherPageView" id="AboutPage">
            <div class="OtherFlex">
               <!-- Picture -->
               <div class="FlexChild">
                  <img src="/Images/aboutPicture.jpg" class="AboutPicture">
               </div>
               <!-- Text -->
               <div class="FlexChild">
                  <h1>About</h1>
                  <br>
                  <p class="ProjectText">
                     Hi, I'm Abbey!<br><br>
                     
                     I'm a full stack developer with two years of experience.
                  </p>
                </div>
            </div>
            <!-- Close button -->
            <div>
                <i class="fas fa-times-circle CloseBtn"></i>
            </div>
         </div>
         
         <!-- Contact page -->
          <div class="OtherPageView" id="ContactPage">
            <div class="OtherFlex">
               <div class="FlexChild">
                  <h1>Contact</h1>
                  <br>
                  <asp:Panel ID="panel" runat="server" DefaultButton="SubmitBtn">
                  <!-- Name text and label -->
                  <div class="ContactFlex">
                    <label>Your Name:</label>
                    <asp:TextBox ID="EmailNameTextBox" runat="server"></asp:TextBox><br />
                  </div>
                  <!-- Email text and label -->
                  <div class="ContactFlex">
                    <label>Your Email:</label>
                    <asp:TextBox ID="EmailTextBox" runat="server"></asp:TextBox><br />
                  </div>
                  <!-- Message text and label -->
                  <div class="ContactFlex">
                     <label>Your Message:</label>
                     <asp:TextBox ID="EmailMessageTextBox" style="resize:none" runat="server" TextMode="MultiLine"></asp:TextBox><br /> 
                 </div>
                 
                <!-- Captcha and label that goes under the Captcha if the user tries to submit without checking it -->
                <div id="Captcha" class="Captcha" data-sitekey="6LeeWNsZAAAAAGA63eHf0Ce0PV_8Cjsgyk_hHeEu"></div>
                <label id="ErrorLabelForCaptcha"></label><br />
                
                <!-- Submit button -->
                <asp:Button ID="SubmitBtn" runat="server" BorderStyle="None" class="OtherButton" OnClick="EmailMeBtnClick" Text="Email Me!" /><br />
                
                <!-- Close button -->
                <i class="fas fa-times-circle CloseBtn"></i>
                  
                </asp:Panel>
               </div>
            </div>
         </div>
            
   
<!-- Project Modals-->
<!-- Project 1 -->
<div id="Project1Modal" class="Modal">
  <!-- Modal content -->
  <div class="ProjectModalContent">
     <!-- Close button - positioned in upper right corner -->
     <div class="CloseButtonFlex">
         <span class="fas fa-times-circle Close"></span>
    </div>
    <div class="ModalFlex">
    <!-- Pictures -->
    <div class="PictureFlex">
        <div class="PictureHolder">
            <!-- Zoom in picture, opens Modal of the image but larger -->
            <i class="fas fa-search-plus ZoomImage"></i>
            <img class="ProjectImage" id="Project1Image" src="~/Images/Projects/Project1-1.png" alt="" />
        </div>
            <!-- Buttons for seeing the next/previous picture -->
            <div> 
                <i class="fas fa-arrow-circle-left PictureButtonLeft"></i>
                <i class="fas fa-arrow-circle-right PictureButtonRight"></i>
            </div>
    </div>
    <!-- Text about the first picture -->
    <div class="ModalFlexChild">
        <h2>Scrum Flow</h2>
        <hr class="ModalLine">
            <p class="ModalLongText" id="Project1Text">
                Scrum Flow's main functionality is as a digital Scrum Board. Here you can see the Scrum Board layout; each card represents a task. Users can drag their tasks to each category as they work on them.
            </p><br>
            <button class="ProjectButton">Visit</button>
        </div>
    </div>
  </div>
</div>
    
</form>
<script src="JS/Script.js" type="text/javascript"></script>
</body>
</html>