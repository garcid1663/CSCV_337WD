// set target date and time 
var targetDate = new Date("Aug 01, 2023 23:59:59").getTime();

//update the count at an interval of 1 second.
var countdown = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time difference between the current date and the target date
    var timeDiff = targetDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the countdown timer
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "Time Until Conference: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (timeDiff < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "EXPIRED";
    }
}, 1000);
