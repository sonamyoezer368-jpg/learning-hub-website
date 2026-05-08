
 // function to check contact form input fields filled and valid or not.
 function validateForm() {
   // obtain user fields input values.
   const title = document.getElementById("Full Name").value.trim();
   const webmail = document.getElementById("Email Address").value.trim();
   const note = document.getElementById("Your Message").value.trim();
   // to get acess to webpage's error message by its identity.
   const mistake = document.getElementById("error");
   // to remove earlier error message.
   mistake.textContent = "";
   mistake.style.color = "black";
   //to check if user full name input fields are empty or not, if empty to show error message and stop form submission.
   if (title === "") {
      mistake.textContent = "Name is required.";
      return false;

   }
   
    //to check if user email input fields are empty or not, if empty to show error message and stop form submission.
   if (webmail === "") {
      mistake.textContent = "Email is required.";
      return false;
   }
   
   if (!webmail.includes("@")) {
      mistake.textContent = "Enter a correct email.";
      return false;
   }
   //to check if user message input fields are empty or not, if empty to show error message and stop form submission.
   if (note === "") {
      mistake.textContent = "Message is required.";
      return false;
   }
   // if all user fields input  are correct to show success message after form submission.
   mistake.style.color = "black";
   mistake.textContent = "Form submitted successfully!";
   return false; 


};
// Action  to hide and show courses of webpage.
function toggleCourses() {
   // To get acess to webpage's courses by its identity.
   const part = document.getElementById("courses");
   //To get acess to webpage's courses hide and show button by its identity.
   const btn = document.getElementById("coursebtn");
   //conditional decision to check if webpage courses are  shown  in row and column layout  or not, if shown to hide it .
   if (part.style.display == "none") {
       part.style.display = "grid";
       btn.textContent = "HIDE";
     //conditional decision to check if webpage courses are  hidden   or not, if hidden to show it .
   } else {
       part.style.display = "none";
       btn.textContent = "SHOW";
}
//Action when  hide  button is clicked courses hide from shown and vice versa.
console.log("Button Clicked");
}
// get acess to all faq questions.
const enquiry = document.querySelectorAll("#faq-question");
// click event addded to each faq questions.
enquiry.forEach(function(question) {
   // click event to hide and show faq answers when faq questions are clicked.
   question.addEventListener("click", function() {

      const response = this.nextElementSibling;
      // conditional decision to check if faq answer is shown or not, if hidden to show it and vice versa.
      if (response.style.display === "block") {
         response.style.display = "none";
      } else {
         response.style.display = "block";
      }
   });
});