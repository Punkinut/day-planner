let anchorList = document.querySelectorAll(".scroll"); 
// Script that shows the date on the main page
$(".date").text(moment().format("DD[ /] MM[ /] YY"))

// Script that shows the time on the main page
$(".time").text(moment().format("h[ : ] mm A"))

// Smooth scroll on buttons
anchorList.forEach (function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let destination =  document.querySelector(this.hash); 
        destination.scrollIntoView({behavior: "smooth"});
    });
})