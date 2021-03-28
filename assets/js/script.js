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

// Gather the hour of the day
var hour = moment().format("k")
// Convert the hour to an interger
var hourToInt = parseInt(hour);

// Determines the circle color on the hour of the day in 9
if(hourToInt === 9) {
    $(".nine-red").css('display', 'block')
} else if (hourToInt > 9) {
    $(".nine-gray").css('display', 'block')
} else {
    $(".nine-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 10
if(hourToInt === 10) {
    $(".ten-red").css('display', 'block')
} else if (hourToInt > 10) {
    $(".ten-gray").css('display', 'block')
} else {
    $(".ten-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 11
if(hourToInt === 11) {
    $(".eleven-red").css('display', 'block')
} else if (hourToInt > 11) {
    $(".eleven-gray").css('display', 'block')
} else {
    $(".eleven-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 12
if(hourToInt === 12) {
    $(".twelve-red").css('display', 'block')
} else if (hourToInt > 12) {
    $(".twelve-gray").css('display', 'block')
} else {
    $(".twelve-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 1
if(hourToInt === 13) {
    $(".one-red").css('display', 'block')
} else if (hourToInt > 13) {
    $(".one-gray").css('display', 'block')
} else {
    $(".one-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 2
if(hourToInt === 14) {
    $(".two-red").css('display', 'block')
} else if (hourToInt > 14) {
    $(".two-gray").css('display', 'block')
} else {
    $(".two-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 3
if(hourToInt === 15) {
    $(".three-red").css('display', 'block')
} else if (hourToInt > 15) {
    $(".three-gray").css('display', 'block')
} else {
    $(".three-green").css('display', 'block')
}

// Determines the circle color on the hour of the day in 4
if(hourToInt === 16) {
    $(".four-red").css('display', 'block')
} else if (hourToInt > 16) {
    $(".four-gray").css('display', 'block')
} else {
    $(".four-green").css('display', 'block')
}