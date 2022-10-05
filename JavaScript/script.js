// reference
// let Sender = document.forms["myForm"]["email"].value.trim();
// let Message = document.forms["myForm"]["message"].value.trim();
// let Title = document.forms["myForm"]["subject"].value.trim();

let Sender = document.getElementById("email").textContent.trim();
let Message = document.getElementById("message").value.trim();
let Title = document.getElementById("subject").value.trim();




function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "oluwapelumiabiodun45@gmail.com",
        Password : "7E668E6CD9EFC3CB9DB0CCD4F7A5AD5A91B5",
        To : 'abiodunoluwapelumi859@gmail.com',
        From : Sender,
        Subject : Title,
        Body : Message
    }).then(
      message => alert("Sent successfully")
    );

    
}