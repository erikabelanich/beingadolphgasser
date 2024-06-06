$(document).ready(function () {
    // Show loading symbol on link click
    $(".navbar-nav a").click(function () {
        var href = $(this).attr("href");
        $("#loading").fadeIn(); // Show loading symbol

        setTimeout(function () {
            window.location.href = href; // Redirect after a delay (simulated loading time)
        }, 2000); // Simulated loading time (2000 milliseconds = 2 seconds)
        
        return false; // Prevent default link behavior
    });
});

