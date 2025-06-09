// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

(()=>{
    alert("You can click on some of the buttons and see it's action. Example, Try clicking on the call button at the footer.")
})();