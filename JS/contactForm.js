document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      var firstName = document.getElementById("user_fname").value;
      var lastName = document.getElementById("user_lname").value;
      var email = document.getElementById("user_email").value;
      var phoneNum = document.getElementById("user_phone").value;
      var message = document.getElementById("user_message").value;
  
      const content = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNum: phoneNum,
        message: message,
      };
  
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      let validInfo = true; // Assume all fields are valid by default
  
      for (const key in content) {
        if (content[key] === null || content[key] === "") {
          console.log("Field '" + key + "' cannot be empty");
          validInfo = false;
          break;
        }
      }
  
      if (!phoneRegex.test(phoneNum)) {
        console.log("Invalid phone number");
        validInfo = false;
      } 
        else if (!emailRegex.test(email)) {
            alert("Invalid email");
            validInfo = false;
        }
  
      if (validInfo) {
        emailjs.init("Nm3ng3MkBU1c6LM3X");
        emailjs
          .send("service_ng56fhf", "template_yto4clx", content)
          .then(function (mes) {
            console.log("Message Sent");
            document.getElementById("user_fname").value = "";
            document.getElementById("user_lname").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("user_phone").value = "";
            document.getElementById("user_message").value = "";
          })
          .catch(function (eror) {
            alert("-Error-");
          });
      }
    });
  });