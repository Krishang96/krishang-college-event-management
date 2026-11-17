
console.log("College Event Management App Started!");

// Student Event Registration
document.addEventListener("DOMContentLoaded", function () {

    const regForm = document.getElementById("registrationForm");
    const confirmBox = document.getElementById("confirmationMessage");

    if (regForm) {
        regForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullName = document.getElementById("fullName").value;
            const eventChoice = document.getElementById("eventChoice").value;

            confirmBox.innerText =
                "Congratulations " + fullName +
                "! You have successfully registered for " + eventChoice + ".";

            regForm.reset();
        });
    }

});
