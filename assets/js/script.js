// Script that shows the date on the main page
$(".date").text(moment().format("DD[ /] MM[ /] YY"))

// Script that shows the time on the main page
$(".time").text(moment().format("h[ : ] mm A"))