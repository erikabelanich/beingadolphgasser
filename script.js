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

// Change cursor to camera icon when not hovering over links or buttons
    document.addEventListener('DOMContentLoaded', function() {
      document.body.addEventListener('mouseover', function(event) {
        if (event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
          document.body.style.cursor = 'url("camera.png"), auto';
        }
      });

      document.body.addEventListener('mouseout', function(event) {
        if (event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
          document.body.style.cursor = 'url("camera.png"), auto';
        }
      });

      // Reset cursor to default when hovering over links or buttons
      document.querySelectorAll('a, button').forEach(function(element) {
        element.addEventListener('mouseover', function() {
          document.body.style.cursor = 'pointer';
        });
        element.addEventListener('mouseout', function() {
          document.body.style.cursor = 'url("camera.png"), auto';
        });
      });
    });
