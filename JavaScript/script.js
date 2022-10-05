// reference
let Sender = document.forms["myForm"]["email"].value.trim();
let Message = document.forms["myForm"]["message"].value.trim();
let Title = document.forms["myForm"]["subject"].value.trim();

let code = "yfpifukyhxsvzrxr";

// let Sender = document.getElementById("email").value.trim();
// let Message = document.getElementById("message").value.trim();
// let Title = document.getElementById("subject").value.trim();




function sendEmail(){
    Email.send({
        SecureToken: "E8C6E0D7-22A4-43F8-9BE5-BC7B717F807D", 
        To : 'oluwapelumiabiodun45@gmail.com',
        From : "Amos",
        Subject : "Title",
        Body : "Message"
    }).then(
      message => alert("Sent successfully")
    );

    

    
}