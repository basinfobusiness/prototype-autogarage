'use strict'

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

(()=>{
    var userResponse = prompt("Have you gone through the buttons","Reply with Y/N");
    if (userResponse === "Y") {
        alert('Continue browsing through the other pages.');
    }
    else if (userResponse === "Reply with Y/N") {
        alert('Please answer with either Y for Yes or N for No');
        window.location.reload();
    }else if(userResponse === "N"){
        var user = confirm("You can click on some of the buttons and see it's action. Example, Try clicking on the call button at the footer. Take me there?")
        if (user) {
            // alert('Taking you there')
            window.location.href = '#contact-us';
        }else{
            alert('Browse through the pages to catch a glimpse');
        }
    }
    else{
        alert('something went wrong.');
    }
    // alert("You can click on some of the buttons and see it's action. Example, Try clicking on the call button at the footer.")
})();