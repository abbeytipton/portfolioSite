using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Web.Script.Serialization;

namespace Portfolio
{

    public partial class Default : System.Web.UI.Page
    {

        // Click function for the send email button //
        protected void EmailMeBtnClick(object sender, EventArgs e)
        {
            string errorMessage = string.Empty;

            // Check that the captcha was valid //
            // if (ValidateReCaptcha(ref errorMessage))
            //{
            // Get the values entered by the user //
            string emailFrom = EmailNameTextBox.Text;
            string emailFromEmail = EmailTextBox.Text;
            string emailMessage = EmailMessageTextBox.Text;
            // Send the email //
            GetEmailMessage(emailFrom, emailFromEmail, emailMessage);
            //}
            //else
            //{
            //  Console.WriteLine("false");
            //}

        }

        // Validate the captcha //
        public bool ValidateReCaptcha(ref string errorMessage)
        {
            // Get the response //
            string Response = Request["Captcha-response"];
            bool Valid = false;

            // Send the request to Google - the number after secret= is the secret key assigned to this URL, then it adds the response from the user //
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create
            (" https://www.google.com/recaptcha/api/siteverify?secret=6LeeWNsZAAAAAPX1XLCcQEz4KRzxu2eR9NJn9mqV&response=" + Response);
            using (WebResponse wResponse = req.GetResponse())
            {
                using (StreamReader readStream = new StreamReader(wResponse.GetResponseStream()))
                {
                    // Deserialize the JSON response //
                    string jsonResponse = readStream.ReadToEnd();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    CaptchaSuccess data = js.Deserialize<CaptchaSuccess>(jsonResponse);

                    // If it's valid, this comes back true //
                    Valid = Convert.ToBoolean(data.success);
                }
            }

            return Valid;
        }


        // Set the email message up //
        protected void GetEmailMessage(string emailFrom, string emailFromEmail, string emailMessage)
        {

            string emailSubject = "You have a new message from " + emailFrom;
            string emailBody = "\n\n" + emailFrom + " has sent you a new message. Their email is: " + emailFromEmail + "\n\n" + "The message is: " + "\n\n" + emailMessage;

            // Go on to the next method //
            SendEmail(emailSubject, emailBody);
        }

        protected void SendEmail(string emailSubject, string emailBody)
        {
            // Set up the email information //
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential("abbey.portfolio.email@gmail.com", "******");
            smtp.EnableSsl = true;

            // Set up and send the message //
            MailMessage emailMessage = new MailMessage("abbeyktipton@gmail.com", "abbeyktipton@gmail.com");
            emailMessage.Subject = emailSubject;
            emailMessage.Body = emailBody;
            smtp.Send(emailMessage);

            // Redirect user //
            Response.Redirect("Default.aspx?Message=sent", false);
        }

    }
}
