// JavaScript to show the loading spinner on link click
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loading').style.display = 'block';
      
      setTimeout(() => {
        window.location.href = this.href;
      }, 2000); // Delay for 2 seconds before navigating
    });
  });
});


// popup window

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
